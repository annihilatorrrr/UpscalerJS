import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

const ROOT_DIR = path.resolve(__dirname, '../..');
const EXAMPLES = path.resolve(ROOT_DIR, 'examples');
const DOCS = path.resolve(ROOT_DIR, 'docs2/docs/usage');

const getExampleFolders = (root: string) => {
  const examples = fs.readdirSync(root).filter(folder => {
    return fs.statSync(path.resolve(root, folder)).isDirectory();
  });
  return examples;
};

const getFrontmatter = (src: string): {
  title: string;
  frontmatter: Record<string, string>;
} => {
  const readmeContents = fs.readFileSync(src, 'utf-8').split('\n');
  let title: string;
  let seenFrontmatter = false;
  let isFrontmatter = false;
  const frontmatter: Record<string, string> = {};
  for (let i = 0; i < readmeContents.length; i++) {
    const line = readmeContents[i];
    if (line === '---') {
      if (seenFrontmatter === false) {
        isFrontmatter = true;
        seenFrontmatter = true;
      } else {
        isFrontmatter = false;
      }
    } else if (isFrontmatter) {
      const parts = line.split(':');
      const key = parts[0].trim();
      const val = parts[1].trim();
      if (key === 'category') {
        frontmatter[key] = val.charAt(0).toUpperCase() + val.slice(1);
      } else {
        frontmatter[key] = val;
      }
    } else if (!title && line.startsWith('#')) {
      title = line.split('#').pop().trim();
    }
  }

  if (!title) {
    throw new Error(`No title found in file ${src}`)
  }
  return {
    title,
    frontmatter,
  }
}

const copyAllReadmes = (src: string, dest: string) => {
  const examples = getExampleFolders(src);
  mkdirp(dest)
  const exampleBits = examples.reduce((obj, example) => {
    return {
      ...obj,
      [example]: getFrontmatter(path.resolve(src, example, 'README.md')),
    };
  }, {});
  examples.forEach((example) => {
    const readme = path.resolve(src, example, 'README.md');
    const { frontmatter: {
      category = 'Browser',
    } } = exampleBits[example];
    const categoryFolder = path.resolve(dest, category);
    mkdirp(categoryFolder);
    fs.copyFileSync(readme, path.resolve(categoryFolder, `${example}.md`))
  });

  const examplesByCategory = examples.reduce((obj, example) => {
    const { frontmatter: { category = 'Browser' } } = exampleBits[example];
    return {
      ...obj,
      [category]: (obj[category] || []).concat(example),
    }
  }, {} as Record<string, Array<string>>);

  const content = `# Examples\n${Object.entries(examplesByCategory).map(([category, examples]) => {
    return `\n## ${category}\n\n${examples.map((example, i) => {
    const { title } = exampleBits[example];
    return `- [${title}](/docs/usage/${category}/${example})`;
  }).join('\n')}`;
  }).join('\n')}`

  fs.writeFileSync(path.resolve(dest, 'index.md'), content, 'utf-8');
}

copyAllReadmes(EXAMPLES, DOCS);

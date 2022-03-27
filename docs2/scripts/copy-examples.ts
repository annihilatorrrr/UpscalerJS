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

const copyAllReadmes = (src: string, dest: string) => {
  const examples = getExampleFolders(src);
  mkdirp(dest)
  examples.forEach(example => {
    const readme = path.resolve(src, example, 'README.md');
    fs.copyFileSync(readme, path.resolve(dest, `${example}.md`))
  });
}

copyAllReadmes(EXAMPLES, DOCS);

import path from 'path';
import { Application, TSConfigReader, TypeDocReader } from 'typedoc';

const ROOT_DIR = path.resolve(__dirname, '../..');
const UPSCALERJS_DIR = path.resolve(ROOT_DIR, 'packages/upscalerjs');

async function main() {
  const app = new Application();

  app.options.addReader(new TSConfigReader())
  app.options.addReader(new TypeDocReader())

  app.bootstrap({
    // typedoc options here
    entryPoints: [path.resolve(UPSCALERJS_DIR, 'src')],
    tsconfig: path.resolve(UPSCALERJS_DIR, 'tsconfig.json'),
  });

  const project = app.convert();

  if (project) {
    const ser = app.serializer.projectToObject(project)
    console.log(ser);
  } else {
    throw new Error('No project was converted.')
  }
}

main().catch(console.error);

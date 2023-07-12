import { readfile } from 'node:fs/promises';

const [, , ...filenames] = process.argv;

const promises = filenames.map((filename) => readfile(filename, 'utf8'));

try {
  const files = await Promise.all(promises);
  console.log(files.join('\n'));
} catch (err) {
  console.error('Error reading files:', err);
  process.exit(1);
}

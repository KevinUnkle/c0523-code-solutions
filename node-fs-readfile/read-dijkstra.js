import { readFile } from 'node:fs/promises';

try {
  const text = await readFile('dijkstra.txt', 'uft8');
  console.log(text);
} catch (err) {
  console.error('Error reading file:', err);
  process.exit(1);
}

import fs from 'fs';
import path from 'path';
import VisaoFeECruzClient from './VisaoFeECruzClient';

export default function VisaoFeECruzPage() {
  let markdownString = '';
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'igreja',
    'visao-fe-e-cruz',
    'institucional.md',
  );

  try {
    markdownString = fs.readFileSync(filePath, 'utf8');
    console.log('File read successfully.');
  } catch (err) {
    console.error('Error reading the file:', err);
    markdownString = 'Error: Could not load content.';
  }

  const img = '/images/batismo.jpg';
  return <VisaoFeECruzClient markdown={markdownString} imgUrl={img} />;
}

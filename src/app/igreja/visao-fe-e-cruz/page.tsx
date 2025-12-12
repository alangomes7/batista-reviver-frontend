import fs from 'fs';
import path from 'path';
import VisaoFeECruzClient from './VisaoFeECruzClient';
import HeroBanner from '@/components/Hero/HeroBanner';
import { SafeMarkdown } from '@/components/Markdown/SafeMarkdown';

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

  return (
    <>
      <HeroBanner
        imageSrc={'/images/batismo.jpg'}
        title='Visão, fé e cruz'
        subtitle='conheça os nossos pilares'
      />
      <VisaoFeECruzClient
        markdown={<SafeMarkdown markdown={markdownString} />}
      />
      ;
    </>
  );
}

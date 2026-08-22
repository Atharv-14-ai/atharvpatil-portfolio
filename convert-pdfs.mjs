import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf2img = require('pdf-img-convert');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'public', 'certificates');

async function convert() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
  for (const file of files) {
    const pdfPath = path.join(dir, file);
    const outputName = file.replace('.pdf', '.jpg');
    const outputPath = path.join(dir, outputName);
    
    console.log(`Converting ${file}...`);
    try {
      // pdf-img-convert returns a promise that resolves to an array of Uint8Arrays
      const output = await pdf2img.convert(pdfPath, { 
          width: 800, // Reasonable width for thumbnails
          page_numbers: [1] 
      });
      fs.writeFileSync(outputPath, output[0]);
      console.log(`Saved ${outputName}`);
    } catch(err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }
}

convert();

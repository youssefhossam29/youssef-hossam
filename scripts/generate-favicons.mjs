import sharp from 'sharp';
import fs from 'fs';

async function generateFavicons() {
  const src = 'public/logo/youssef-badge-primary-new.png';

  // 1. Get trimmed buffer (881x881 square of the circular badge)
  const trimmed = await sharp(src).trim().toBuffer();

  // 2. Generate PNG sizes
  const sizes = [16, 32, 48, 180, 192, 512];
  const pngs = {};
  for (const s of sizes) {
    pngs[s] = await sharp(trimmed)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  }

  // 3. Build multi-resolution ICO (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const count = icoSizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO format
  header.writeUInt16LE(count, 4); // Count

  let offset = 6 + count * 16;
  const entries = [];
  for (const s of icoSizes) {
    const buf = pngs[s];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(s, 0); // Width
    entry.writeUInt8(s, 1); // Height
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    entries.push(entry);
    offset += buf.length;
  }
  const icoBuffer = Buffer.concat([header, ...entries, ...icoSizes.map(s => pngs[s])]);

  // 4. Generate SVG icon (retina crisp at any resolution)
  const b64 = pngs[512].toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/png;base64,${b64}" width="512" height="512" />
</svg>
`;

  // 5. Write to public/
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon-16x16.png', pngs[16]);
  fs.writeFileSync('public/favicon-32x32.png', pngs[32]);
  fs.writeFileSync('public/favicon-48x48.png', pngs[48]);
  fs.writeFileSync('public/apple-touch-icon.png', pngs[180]);
  fs.writeFileSync('public/icon-192x192.png', pngs[192]);
  fs.writeFileSync('public/icon-512x512.png', pngs[512]);
  fs.writeFileSync('public/icon.svg', svgContent);

  // 6. Write to src/app/ (Next.js App Router conventions)
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('src/app/icon.png', pngs[512]);
  fs.writeFileSync('src/app/apple-icon.png', pngs[180]);
  fs.writeFileSync('src/app/icon.svg', svgContent);

  console.log('All favicon and icon assets generated successfully!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

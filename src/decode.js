// src/decode.js

const fs = require('fs');

function decodeText(b64) {
  return Buffer.from(b64, 'base64').toString('utf-8');
}

function decodeToFile(b64, output) {
  const buffer = Buffer.from(b64, 'base64');
  fs.writeFileSync(output, buffer);
}

const b64 = process.argv[2];
const output = process.argv[3];

if (!b64) {
  console.log("Uso: node decode.js [base64] [output.txt] (opcional)");
  process.exit(1);
}

if (output) {
  decodeToFile(b64, output);
  console.log(`Arquivo salvo em: ${output}`);
} else {
  console.log(decodeText(b64));
}

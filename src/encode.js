// src/encode.js

const fs = require('fs');

function encodeText(text) {
  return Buffer.from(text, 'utf-8').toString('base64');
}

function encodeFile(path) {
  const fileBuffer = fs.readFileSync(path);
  return fileBuffer.toString('base64');
}

const mode = process.argv[2];
const input = process.argv[3];

if (!mode || !input) {
  console.log("Uso: node encode.js [text|file] [entrada]");
  process.exit(1);
}

if (mode === 'text') {
  console.log(encodeText(input));
} else if (mode === 'file') {
  console.log(encodeFile(input));
} else {
  console.log("Modo inválido. Use 'text' ou 'file'.");
}

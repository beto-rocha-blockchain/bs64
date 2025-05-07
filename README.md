## 🚀 bs64

🔐 Codifique e decodifique dados com **Base58** de forma simples e moderna usando **Node.js**

![Node.js](https://img.shields.io/badge/Node.js-20%2B-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![bs64](https://img.shields.io/badge/bs64-Encoding-blue)

---

## 🎯 Objetivo

Este projeto tem como objetivo fornecer ferramentas básicas para codificar e decodificar dados em Base64, usando apenas Node.js puro. Ele pode ser utilizado como referência para estudos, criação de ferramentas CLI ou como base para aplicações mais robustas.

## 🧠 O que é Base64?

Base64 é um sistema de codificação de dados que converte informações binárias (como arquivos, imagens, ou textos) em uma sequência de caracteres ASCII (letras, números e alguns símbolos).

## 📦 Instalação

Clone o repositório e instale as dependências (se houver):

```bash
git clone https://github.com/seu-usuario/bs64.git
cd bs64
npm install
```

## 🚀 Scripts disponíveis

▶️ Codificar texto

```bash
npm run encode-text -- "Olá, mundo!"
```

📄 Codificar arquivo

```bash
npm run encode-file -- ./example.txt
```

🔓 Decodificar texto Base64

```bash
npm run decode -- "T2zDoSwgbXVuZG8h"
```

💾 Decodificar Base64 e salvar como arquivo

```bash
npm run decode -- "U2FsdmFyIGVtIGFyYXF1aXZvLnR4dA==" output.txt
```

📁 Estrutura

```bash
bs64/
├── src/
│   ├── encode.js     # Codificador Base64
│   └── decode.js     # Decodificador Base64
├── example.txt       # Arquivo de exemplo
├── package.json
└── README.md
```

🛠️ Tecnologias

- Node.js

- Módulo interno fs

- Buffer para manipulação binária

## 📚 Sobre Base64

Base64 é um esquema de codificação que transforma dados binários em texto ASCII, sendo amplamente utilizado para transmitir dados em formatos como JSON, HTML ou XML. Apesar de parecer criptografia, não é seguro para proteger dados sensíveis.

## Exemplo:

Texto original:

```bash
Olá, mundo!
```

Codificado:

```bash
T2zDoSwgbXVuZG8h
```

Decodificado:

```bash
Olá, mundo!
```

## 📄 Licença
Este projeto está licenciado sob a Licença MIT.

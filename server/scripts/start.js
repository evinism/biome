require('dotenv').config();
const run = require('../src/server.ts').default;

run(process.env);

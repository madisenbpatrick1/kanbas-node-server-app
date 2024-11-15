import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import PathParameters from './Lab5/PathParameters.js';
// const express = require('express')
const app = express()
app.use(express.json());
Lab5(app);

Hello(app); // pass app reference to Hello
 
app.listen(process.env.PORT || 4000)


import express from 'express';
import Hello from './Hello.js';
// const express = require('express')
const app = express()
Hello(app); // pass app reference to Hello

app.listen(4000)


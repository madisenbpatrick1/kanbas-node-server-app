import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import PathParameters from './Lab5/PathParameters.js';
import cors from "cors"
import UserRoutes from './Kanbas/Users/routes.js';
// const express = require('express')
const app = express()

//app.use(express.json());
app.use(cors())
app.use(express.json());

UserRoutes(app);

Lab5(app);

Hello(app); // pass app reference to Hello
 
app.listen(process.env.PORT || 4000)

// start with command line nodemon index.js
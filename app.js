const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes= require('./routes');
const bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({
      extended: false
  }));

app.use(bodyParser.json());

app.use("/routes",routes);



const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log(`Listening on port ${port}`)});
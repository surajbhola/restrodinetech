const express = require("express");
const fs = require("fs");
const app = express(); //express give bunch of built-in functions to app const
const bodyParser = require( 'body-parser');
const foodItemRouter = require('./routes/foodItemsRoutes');

app.use(express.json()); //middleware for adding data to body before sending the req
app.use(bodyParser.json());
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  next();
});
// 3) ROUTES
app.use('/api/v1/fooditems', foodItemRouter);



module.exports = app;
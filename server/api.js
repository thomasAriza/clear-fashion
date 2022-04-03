const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { ObjectId, Int32 } = require('mongodb');

const mongo = require("./db/index")

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send("Home");
});

app.get('/products', async (request, response) => {
  let product= await mongo.find()
  response.send(product)
});


app.get('/products/:id', async (request, response) => {
  const id = request.params.id;
  response.send(await mongo.find({"_id":ObjectId(id)}))
});

app.get("/search", async (request, response) => {
  let limit = parseInt(request.query.limit);

  const brand = request.query.brand;
  
  
  const price = request.query.price;
  if( price != undefined){
    price=parseInt(price)
  }
  
  if (brand==undefined && price==undefined && limit==undefined){
    response.send(await mongo.find())
  }
  else if(brand==undefined && price==undefined){
    response.send(await mongo.find({},limit))
  }
  else if(price==undefined && limit==undefined){
    console.log("test")
    response.send(await mongo.find({"brand":brand}))
  }
  else if(brand==undefined && limit==undefined){
    response.send(await mongo.find({"price":price}))
  }
  else if(brand==undefined){
    response.send(await mongo.find({"price":price},limit))
  }
  else if(price==undefined){
    response.send(await mongo.find({"brand":brand},limit))
  }
  else if(limit==undefined){
    response.send(await mongo.find({"brand":brand,"price":price}))
  }
  else{
    response.send(await mongo.find({"brand":brand,"price":price},limit))
  }
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

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
  console.log("test");
});

app.get('/products', async (request, response) => {
  let product= await mongo.find()
  console.log(product);
});


app.get('/products/:id', async (request, response) => {
  const id = request.params.id;
  console.log(await mongo.find({"_id":ObjectId(id)}))
});

app.get("/search", async (request, response) => {
  const limit = request.query.limit;
  console.log(limit)

  const brand = request.query.brand;
  console.log(brand)
  const price = request.query.price;
  console.log(price)
  console.log(await mongo.find({"brand":brand,"price":new Int32(price)},limit))
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

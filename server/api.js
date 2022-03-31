const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const mongo = require("./db/index")

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/products', (request, response) => {
  console.log(mongo.find());
});


app.get('/products/:id', (request, response) => {
  const id = request.params("id");
  console.log(mongo.find({"id":id}))
  mongo.close()
});

app.get("/products/search", (request, response) => {
  const limit = request.params("limit");
  const brand = request.params("brand");
  const price = request.params("price");
  console.log(mongo.find({"brand":brand,"price":price},limit))
  mongo.close()
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

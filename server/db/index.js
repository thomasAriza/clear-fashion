require('dotenv').config();
const {MongoClient} = require('mongodb');
const fs = require('fs');

const MONGODB_DB_NAME = 'SchoolProject';
const MONGODB_COLLECTION = 'products';
const MONGODB_URI = "mongodb+srv://Thomas:IHqAvEbi4ri0czAK@schoolproject.hu13b.mongodb.net/SchoolProject?retryWrites=true&w=majority"

let client = null;
let database = null;

/**
 * Get db connection
 * @type {MongoClient}
 */
const getDB = module.exports.getDB = async () => {
  try {
    if (database) {
      console.log('💽  Already Connected');
      return database;
    }
    client = await MongoClient.connect(MONGODB_URI);
    
    database = client.db(MONGODB_DB_NAME);

    console.log('💽  Connected');

    return database;
  } catch (error) {
    console.error('🚨 MongoClient.connect...', error);
    return null;
  }
};

/**
 * Insert list of products
 * @param  {Array}  products
 * @return {Object}
 */
module.exports.insert = async products => {
  try {
    const db = await getDB();
    const collection = db.collection(MONGODB_COLLECTION);
    // More details
    // https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#insert-several-document-specifying-an-id-field
    const result = await collection.insertMany(products, {'ordered': false});

    return result;
  } catch (error) {
    console.error('🚨 collection.insertMany...', error);
    fs.writeFileSync('products.json', JSON.stringify(products));
    return {
      'insertedCount': error.result.nInserted
    };
  }
};

/**
 * Find products based on query
 * @param  {Array}  query
 * @return {Array}
 */
module.exports.find = async (query={},limite=12) => {
  try {
    const db = await getDB();
    const collection = db.collection(MONGODB_COLLECTION);
    const result = await collection.find(query).limit(limite).toArray();

    return result;
  } catch (error) {
    console.error('🚨 collection.find...', error);
    return null;
  }
};

/**
 * Close the connection
 */
module.exports.close = async () => {
  try {
    await client.close();
  } catch (error) {
    console.error('🚨 MongoClient.close...', error);
  }
};
/** 
fs.readFile("../sources/dedicated.json", (err,data)=>{
  let conv=JSON.parse(data)
  this.insert(conv)
  this.close()
})

fs.readFile("../sources/montlimart.json", (err,data)=>{
  let conv=JSON.parse(data)
  this.insert(conv)
  console.log("montlimart")
  this.close()
})
fs.readFile("../sources/adresse.json", (err,data)=>{
  let conv=JSON.parse(data)
  this.insert(conv)
  console.log("adresse")
  this.close()
})
*/
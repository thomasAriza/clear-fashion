/* eslint-disable no-console, no-process-exit */
const fs = require('fs');

// create a JSON object
const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
const data = JSON.stringify(user);

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});


const dedicatedbrand = require('./sources/dedicatedbrand');

async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/men/news') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    console.log(products);
    const data=JSON.stringify(products)
    fs.writeFile('./sources/dedicated.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    });
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

const montlimart = require('./sources/montlimart');

async function sandbox_2 (eshop = 'https://www.montlimart.com/toute-la-collection.html') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await montlimart.scrape(eshop);
    const data=JSON.stringify(products)
    fs.writeFile('./sources/montlimart.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    });
    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const adresse = require('./sources/adresse');

async function sandbox_3 (eshop = 'https://adresse.paris/630-toute-la-collection') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await adresse.scrape(eshop);

    console.log(products);
    const data=JSON.stringify(products)
    fs.writeFile('./sources/adresse.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    });
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

sandbox(eshop)



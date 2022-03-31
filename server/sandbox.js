/* eslint-disable no-console, no-process-exit */
const fs = require('fs');


const dedicatedbrand = require('./sources/dedicatedbrand');

async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/men/news') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    let data=JSON.stringify(products)
    fs.writeFile('./sources/dedicated.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    });
    console.log('done');
  } catch (e) {
    console.error(e);
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
    console.log('done');
  } catch (e) {
    console.error(e);
  }
}

const adresse = require('./sources/adresse');

async function sandbox_3 (eshop = 'https://adresse.paris/630-toute-la-collection') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await adresse.scrape(eshop);

    const data=JSON.stringify(products)
    fs.writeFile('./sources/adresse.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    });
    console.log('done');
  } catch (e) {
    console.error(e);
  }
}

sandbox_3(eshop)



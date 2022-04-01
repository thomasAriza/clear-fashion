const fetch = require('node-fetch');
const cheerio = require('cheerio');

const parse = data => {
    const $ = cheerio.load(data);
  
    return $('.right-block')
      .map((i, element) => {
        const name = $(element)
          .find('.product-name-container.versionpc')
          .text()
          .trim()
        const price = parseInt(
          $(element)
            .find('.prixright')
            .text()
            .split(",")[0]
            .replace(" ","")
        );
  
        return {name, price,"brand":"adresse"};
      })
      .get();
  };


  module.exports.scrape = async url => {
    try {
      const response = await fetch(url);
  
      if (response.ok) {
        const body = await response.text();
  
        return parse(body);
      }
  
      console.error(response);
  
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
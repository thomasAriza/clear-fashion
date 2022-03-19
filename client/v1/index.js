// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];



console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const CHEAPEST_TSHIRT = [{
  'name': 'Hopaal',
  'url_of_cheapest_tshirt': 'https://hopaal.com/collections/t-shirts-homme/products/classique-beige-t-shirt-homme?variant=31393370767446'
}, {
  'name': 'Loom',
  'url_of_cheapest_tshirt': 'https://www.loom.fr/products/le-t-shirt'
}, {
  'name': 'ADRESSE',
  'url_of_cheapest_tshirt': 'https://adresse.paris/t-shirts-et-polos/3982-t-shirt-ranelagh-1300000259255.html'
}];

console.table(CHEAPEST_TSHIRT)





/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

const number_of_products=marketplace.length;
console.log(number_of_products);



// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have
const brands = new Set(marketplace.map((product)=> product.brand))
console.log(brands)
console.log(brands.size)

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

const marketplace_sort_by_price = (marketplace) => {
  return marketplace.slice().sort((a,b)=>a.price-b.price)
}

const marketplace_sorted_by_price = marketplace_sort_by_price(marketplace)
console.log(marketplace_sorted_by_price)


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
const marketplace_sort_by_date = (marketplace) => {
  return marketplace.slice().sort((a,b)=>new Date(a.date)- new Date(b.date))
}

const marketplace_sorted_by_date = marketplace_sort_by_date(marketplace)
console.log(marketplace_sorted_by_date)


// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
const filter_50_to_100 = (marketplace) => {
  const marketplace_filtered = new Array()
  marketplace.map((product)=> {
    if(product.price>50 && product.price<100){
      marketplace_filtered.push(product)
    }
  })
  return marketplace_filtered
}
console.log(filter_50_to_100(marketplace))

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average
const calculate_average = (marketplace) => {
  let sum = 0
  marketplace.map((product) => {
    sum=product.price+sum
  })

  return sum/marketplace.length
}
console.log(calculate_average(marketplace))




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

const create_brands = (marketplace) => {
  var dict = {};
  // for (brand in brands){
  //   dict[brand]=new Array()
  // }
  marketplace.map((product) => {
    dict[product.brand]=new Array(product).concat(dict[product.brand])
  })
  return dict
}  


console.log(create_brands(marketplace))

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

console.log(create_brands(marketplace_sorted_by_price))


// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

console.log(create_brands(marketplace_sorted_by_date))




/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

const p90 = (brands_sorted_by_price) => {
  new Array(brands).map((brand)=>{
    const index = Math.round(new Array(brands_sorted_by_price[brand]).length*0.9)
    console.log(index)
    console.log(brands_sorted_by_price[brand][index])
  })
}


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
const reasonable_price = (cotele) => {
  let reasonable=new Boolean(true)
  cotele.map((product)=>{
    if(product.price>100){
      reasonable=false
    }
  })
  return reasonable
}
console.log(reasonable_price(COTELE_PARIS))


// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

const find_product = (uid) => {
  COTELE_PARIS.map((product)=>{
    if(uid==product.uuid){
      console.log(product)
    }
  })
}

find_product("b56c6d88-749a-5b4c-b571-e5b5c6483131")


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

const delete_product = (uid) => {
  COTELE_PARIS.map((product)=>{
    if(uid==product.uuid){
      COTELE_PARIS.pop(product)
    }
  })
  console.log(COTELE_PARIS)
}
delete_product("b56c6d88-749a-5b4c-b571-e5b5c6483131")

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
localStorage.setItem("dic",MY_FAVORITE_BRANDS)
console.log(localStorage)
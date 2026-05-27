/*
=================================================
Anonymous Functions and Functional Programming
Lesson 2: Practice - Higher-Order Functions
=================================================
*/

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

/*
=================================================
Task 1: Filter Products by Availability
=================================================

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.
*/

function filterProducts(productsArray, callback) {
  return productsArray.filter(callback);
}

// Variation 1: Filter products currently in stock
const inStockProducts = filterProducts(
  products,
  product => product.inStock
);

console.log("In Stock Products:");
console.log(inStockProducts);

// Variation 2: Filter products above $500
const expensiveProducts = filterProducts(
  products,
  product => product.price > 500
);

console.log("Products Above $500:");
console.log(expensiveProducts);

/*
=================================================
Task 2: Transform Product Names
=================================================

Use `map()` to create a new array of product names in UPPERCASE.
*/

const uppercaseNames = products.map(
  product => product.name.toUpperCase()
);

console.log("Uppercase Product Names:");
console.log(uppercaseNames);

/*
=================================================
Task 3: Generate Discounted Prices
=================================================

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object
  and returns a discounted price
*/

function applyDiscount(discountPercent) {
  return function(product) {
    return {
      ...product,
      salePrice:
        product.price -
        (product.price * discountPercent / 100)
    };
  };
}

// Variation 1: 20% discount
const discount20 = applyDiscount(20);

const discountedProducts = products.map(discount20);

console.log("20% Discounted Products:");
console.log(discountedProducts);

// Variation 2: 10% discount
const discount10 = applyDiscount(10);

const discountedProducts10 = products.map(discount10);

console.log("10% Discounted Products:");
console.log(discountedProducts10);

/*
=================================================
Task 4: Calculate Total Inventory Value
=================================================

Use `reduce()` to calculate the total value
of products currently in stock.
*/

const totalInventoryValue = products.reduce(
  (total, product) => {
    if (product.inStock) {
      return total + product.price;
    }

    return total;
  },
  0
);

console.log("Total Inventory Value:");
console.log(totalInventoryValue);

/*
=================================================
Console Test Results
=================================================
*/

console.log("Filtered products:", inStockProducts);
console.log("Uppercased names:", uppercaseNames);
console.log("Discounted products:", discountedProducts);
console.log("Total value in stock:", totalInventoryValue);
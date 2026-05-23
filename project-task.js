const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// 1. Higher-Order Function for Filtering
function filterProducts(productsArray, callback) {
  return productsArray.filter(callback);
}

// Filter products in stock
const inStockProducts = filterProducts(
  products,
  product => product.inStock
);

console.log("In Stock Products:");
console.log(inStockProducts);

// Filter expensive products
const expensiveProducts = filterProducts(
  products,
  product => product.price > 500
);

console.log("Products Above $500:");
console.log(expensiveProducts);

// 2. Transform Product Names
const uppercaseNames = products.map(product =>
  product.name.toUpperCase()
);

console.log("Uppercase Product Names:");
console.log(uppercaseNames);

// 3. Higher-Order Function Returning a Function
function applyDiscount(discountPercent) {
  return function(price) {
    return price - (price * discountPercent / 100);
  };
}

const discount20 = applyDiscount(20);

const discountedProducts = products.map(product => {
  return {
    name: product.name,
    discountedPrice: discount20(product.price)
  };
});

console.log("Discounted Products:");
console.log(discountedProducts);

// 4. Total Inventory Value
const totalInventoryValue = products
  .filter(product => product.inStock)
  .reduce((total, product) => total + product.price, 0);

console.log("Total Inventory Value:");
console.log(totalInventoryValue);
EOFcat > project-task.js <<'EOF'
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// 1. Higher-Order Function for Filtering
function filterProducts(productsArray, callback) {
  return productsArray.filter(callback);
}

// Filter products in stock
const inStockProducts = filterProducts(
  products,
  product => product.inStock
);

console.log("In Stock Products:");
console.log(inStockProducts);

// Filter expensive products
const expensiveProducts = filterProducts(
  products,
  product => product.price > 500
);

console.log("Products Above $500:");
console.log(expensiveProducts);

// 2. Transform Product Names
const uppercaseNames = products.map(product =>
  product.name.toUpperCase()
);

console.log("Uppercase Product Names:");
console.log(uppercaseNames);

// 3. Higher-Order Function Returning a Function
function applyDiscount(discountPercent) {
  return function(price) {
    return price - (price * discountPercent / 100);
  };
}

const discount20 = applyDiscount(20);

const discountedProducts = products.map(product => {
  return {
    name: product.name,
    discountedPrice: discount20(product.price)
  };
});

console.log("Discounted Products:");
console.log(discountedProducts);

// 4. Total Inventory Value
const totalInventoryValue = products
  .filter(product => product.inStock)
  .reduce((total, product) => total + product.price, 0);

console.log("Total Inventory Value:");
console.log(totalInventoryValue);

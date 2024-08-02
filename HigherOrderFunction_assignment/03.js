//3. Build a Feature for Store's Inventory

let storeInventory = {
    "item1": 50,
    "item2": 100,
    "item3": 150
};

let exchangeRate = 80;

let convertedInventory = Object.fromEntries(
    Object.entries(storeInventory).map(([item, price]) => [item, price * exchangeRate])
);

console.log(convertedInventory);  // Output: {item1: 4000, item2: 8000, item3: 12000}

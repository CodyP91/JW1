// Define the item_names array
let item_names = ["Item 1", "Item 2", "Item 3"];

// Define the item_prices array
let item_prices = [10.99, 24.99, 5.99];

// Define the in_stock array
let in_stock = [true, false, true];

// Assign the first item name to first_item_name
let first_item_name = item_names[0];

// Assign the first item price to first_item_price
let first_item_price = item_prices[0];

// Add a new item to each of the arrays using the push function
item_names.push("Item 4");
item_prices.push(14.99);
in_stock.push(true);

// Assign the value of the last item name to last_item_name
let last_item_name = item_names.pop();

// Assign the value of the last item price to last_item_price
let last_item_price = item_prices.pop();

// Assign the value of the last item stock to last_item_stock
let last_item_stock = in_stock.pop();

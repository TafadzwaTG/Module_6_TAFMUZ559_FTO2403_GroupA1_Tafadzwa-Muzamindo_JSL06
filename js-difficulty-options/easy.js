// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
  // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.
  const menuContainer = document.getElementById("menu");

  // QUESTION: How can you loop through each category and its items in the menu object?

  for (const [category, items] of Object.entries(menu)) {
    // QUESTION: What HTML element represents a category? Create it here.
    const categoryElement = document.createElement("h3");

    // QUESTION: How can you set the text content of the category element to the category name?
    categoryElement.textContent = category;

    // QUESTION: How can you append the category element to the menu container in the HTML?
    menuContainer.appendChild(categoryElement);

    // QUESTION: What HTML element represents a list of items? Create it here.
    const itemsList = document.createElement("ul");

    // QUESTION: Loop through the items in the category and create list items for each one.
    menuContainer.appendChild(itemsList);

    items.forEach((item) => {
      // QUESTION: Create a list item element here.
      const itemElement = document.createElement("li");

      // QUESTION: How can you set the text content of the list item element to the item name?
      itemElement.textContent = item;

      // QUESTION: Attach a click event listener to the list item to add it to the order.
      itemElement.addEventListener("click", () => addToOrder(item));

      // QUESTION: How can you append the list item to the list of items for this category?
      itemsList.appendChild(itemElement);
    });
  }
}

// QUESTION: How can you update the order when an item is added? What elements in the HTML do you need to reference?

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // QUESTION: What HTML elements represent the order items list and the order total?
  const orderItemsList = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");

  // QUESTION: Create a list item for the order here.
  const orderItem = document.createElement("li");

  // QUESTION: How can you set the text content of the list item to the item name?
  orderItem.textContent = itemName;

  // Add a click event listener to the order item for removal
  orderItem.addEventListener("click", () =>
    removeFromOrder(orderItem, itemName)
  );

  // QUESTION: How can you append the list item to the order items list?
  orderItemsList.appendChild(orderItem);

  // QUESTION: Calculate and update the total price. How can you access the current total and item price?
  let currentTotal = parseFloat(orderTotal.textContent.replace(" ", "")) || 0;
  currentTotal += getItemPrice(itemName);

  // QUESTION: How can you update the text content of the order total element with the new total?
  orderTotal.textContent = `${currentTotal.toFixed(2)}`;
}
// Function to remove an item from the order
function removeFromOrder(orderItem, itemName) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");

  orderItemsList.removeChild(orderItem);

  let currentTotal = parseFloat(orderTotal.textContent.replace("$", "")) || 0;
  currentTotal -= getItemPrice(itemName);
  orderTotal.textContent = `${currentTotal.toFixed(2)}`;
}

function getItemPrice(itemName) {
  const prices = {
    "Garlic Bread": 69,
    Bruschetta: 62,
    "Margherita Pizza": 85,
    "Spaghetti Carbonara": 410,
    Tiramisu: 78,
    Cheesecake: 85,
  };
  return prices[itemName] || 0;
}

// QUESTION: What's the first step to initialize the menu system and display the menu?

// Function to initialize the menu system
function initMenuSystem(menu) {
  // QUESTION: What function should you call to display the menu?
  displayMenuItems(menu);
}

// QUESTION: How can you start the menu system? What function should you call here?

// Call the init function to start the menu system
document.addEventListener("DOMContentLoaded", () => initMenuSystem(menu));

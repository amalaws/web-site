// Login Functionality (Basic example)
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // For demonstration purposes, you can check hardcoded username and password.
  // In a real application, you'd verify the credentials through a backend API.
  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    window.location.href = 'shop.html'; // Redirect to the shop page
  } else {
    alert('Incorrect username or password. Please try again.');
  }
}

// Item Selection
let selectedItem = "";

function selectItem(itemName, price) {
  selectedItem = { name: itemName, price: price };
  
  // Display selected item in the "Selected Item" section
  document.getElementById('selected-item').textContent = `You have selected: ${itemName} - $${price}`;
  document.getElementById('selected-item-container').style.display = "block";
}

// Buying the item (Placeholder for purchase logic)
function buyItem() {
  if (selectedItem) {
    alert(`You have successfully purchased: ${selectedItem.name} for $${selectedItem.price}`);
    // In a real application, here you would trigger the payment gateway or back-end order processing
    document.getElementById('selected-item-container').style.display = "none"; // Hide the selected item section
  } else {
    alert('Please select an item first.');
  }
}

// Adding event listeners for login and item selection
document.addEventListener('DOMContentLoaded', () => {
  // Login form submission
  const loginForm = document.querySelector('.login-container form');
  if (loginForm) {
    loginForm.addEventListener('submit', login);
  }

  // Item selection buttons (from the shop page)
  const itemButtons = document.querySelectorAll('.item button');
  itemButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const itemName = e.target.previousElementSibling.previousElementSibling.textContent; // Get the item name
      const itemPrice = parseFloat(e.target.previousElementSibling.textContent.replace('$', '')); // Get the price of the item
      selectItem(itemName, itemPrice);
    });
  });
});

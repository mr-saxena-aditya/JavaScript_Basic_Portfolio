// Text to be typed
const text = "Aditya Saxena";
// Get the element where the text will be displayed
const textContainer = document.getElementById("typed-text");

// Track the current position in the text
let index = 0;

// Function to type the text
function typeText() {
  // Update the text content with the current slice of the text
  textContainer.textContent = text.slice(0, index);

  // If not all characters have been typed, increase the index and schedule the next typing
  if (index < text.length) {
    index++;
    setTimeout(typeText, 100); // Typing speed (adjust as desired)
  }
}

// Start typing the text
typeText();

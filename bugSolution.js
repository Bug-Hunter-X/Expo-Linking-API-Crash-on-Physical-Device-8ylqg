//Import the necessary modules
import * as Linking from 'expo-linking';

// Function to handle opening a URL
async function openURLAsync(url) {
  if (!url) {
    console.error('Invalid URL provided.');
    return;
  }

  try {
    const result = await Linking.openURL(url);
    if (!result) {
      console.warn('URL could not be opened.');
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
}

// Example usage
const someUrl = 'https://www.example.com';
openURLAsync(someUrl);

// Function to check if a URL is valid
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  // Return false if not valid URL
  }
}

//Check URL validity before opening
if(isValidURL(someUrl)){
  openURLAsync(someUrl);
} else {
  console.error('Invalid URL');
} 
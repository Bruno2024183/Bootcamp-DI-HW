// The URL to fetch the data from Giphy API
onst gifURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Use fetch() to make a GET request
fetch(gifURL)
  .then((response)) => {
    // Check if the reponse status is OK (status code 200-299)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response JSON data
    return response.json();
  })
  .then((data) => {
    // Log the JavaScript Object that you receive
    console.log(data);
  })
  .catch((error)) => {
    // Handle any errors that occur
    console.error('There was an error with the fetch operation', error);
  });
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giphy API Console Logger</title>
</head>
<body>
    <h1>Giphy API Console Logger</h1>
    <button id="fetchButton">Fetch Hilarious GIFs</button>

    <script>
        // Giphy API URL
        const gifURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

        // Function to fetch gifs and log them to the console
        const fetchGifs = async () => {
            try {
                // Make the GET request using fetch
                const response = await fetch(gifURL);

                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the response into JSON
                const gifData = await response.json();

                // Log the entire response to the console
                console.log(gifData);

            } catch (error) {
                // Catch any errors and log them
                console.error("Error fetching gifs: ", error);
            }
        };

        // Add event listener to button to trigger fetchGifs
        document.getElementById('fetchButton').addEventListener('click', fetchGifs);
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars Starship Fetcher</title>
</head>
<body>
    <h1>Star Wars Starship Fetcher</h1>
    <button id="fetchButton">Fetch Starship Data</button>

    <script>
        // Function to fetch starship data using async/await
        const fetchStarship = async () => {
            try {
                // Fetch the data from the API
                const response = await fetch("https://www.swapi.tech/api/starships/9/");
                
                // Check if the response is okay (status 200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the response JSON
                const starshipData = await response.json();

                // Log the result part of the object (as per the image)
                console.log(starshipData.result);

            } catch (error) {
                // Catch and log any errors
                console.error("Error fetching starship data: ", error);
            }
        };

        // Add event listener to the button
        document.getElementById('fetchButton').addEventListener('click', fetchStarship);
    </script>
</body>
</html>
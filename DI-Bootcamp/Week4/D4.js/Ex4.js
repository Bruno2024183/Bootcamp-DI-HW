<!doctype hyml>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Volume of a Sphere<title>
        <style>
            body {
                padding-top: 30px;
            }


            label, input {
                display: block;
                margin-bottom: 10px;

            }
        </style>
    </head>
    <body>
        <p>input radius value and get the volume of a sphere.</p>
        <form id="MyForm">
            <label for="radius">Radius</label>
            <input type="text" name="radius" id="radius" required>

            <label for="volume">Volume</label>
            <input type="text" name="volume" id="volume" readonly">

            <input type="submit" value="Calculate" id="submit">
        </form>

        <script>
            // Function to calculate the volume of the sphere
            function calculateVolume(event) {
                event.preventDefault(); // Prevent the form from submitting

                // Retrieve the radius value from the input field
                const radius = document.getElementById('radius').value;

                // Check if the input is a number of greater than zero
                if (radius && !isNaN(radius) && radius > 0) {
                    // Calculate the volume using the formula
                    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

                    // Display the calculated volume in the volume input field
                    document.getElementById('volume').value = volume.toFixed(2);
                } else {
                    alert('Please enter a valid radius');
                }
            }


            // Add an event listener to the form trigger the volume calculation
            document.getElementById('MyForm').addEvenListener('submit', calculateVolume);
            </script>
        </body>
    </html>
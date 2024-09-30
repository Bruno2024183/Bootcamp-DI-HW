<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width"=device-width, initial-scale=1.0">
    <title>Bold Items Highlight<title>
</head>
<body>


    <p id="text">
        <strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
        <strong>end</strong> you <strong>will</strong> be great Developers!
        <strong>Enjoy</strong> the <strong>JavaScript</strong> lessons
    </p>


    <script>
        // Declare a global variable named allBoldItems
        let allBoldItems;

        // Create a global variable named allBoldItems
        let allBoldItems;

        // Create a function called getBoldItems() that collects all the bold items
        function getBoldItems() {
            allBoldItems = document.querySelectorAll('strong');
        } 


        // Create a function called highlight() that changes the color of all the bold text to blue 
        function highlight() {
            allBoldItems.forEach(item => {
                item.style.color = 'blue';
            });
        }


        // Create a function called returnItemsToDefault() that changes the color back to black
        function returnItemsToDefault() {
            allBoldItems.forEach(item => {
                item.style.color = 'black';
            });
        }


        // Call getBoldItems to populate the global variable
        getBoldItems();

        // Add event listeners to the paragraph for mouseover and mouseout
        const paragraph = document.getElementById('text');
        paragraph.addEventListener('mouseover', highlight);
        paragraph.addEvenListener('mouseout', returnItemsToDefault);
    </script>

</body>
</html>
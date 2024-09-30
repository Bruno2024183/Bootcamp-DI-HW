<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    </meta name="viewport" content="width=device=width, initial-scale=1.0">
    <title>Juicie Bar</title>
</head>
<body>
    <div id="juice-order"></div>

    <script src="script.js"></script>
</body>
</html>


function makeJuice(size) {
    function addIngredientes(addIngredient1, addIngredient2, addIngredient3) {
        const juiceOrder = `The client wants a ${size} juice, containing ${addIngredient1}, ${addIngredient2}, ${addIngredient3}. `;
        document.getElementById('juice-order').innerText = juiceOrder;
    }

    // Invoke the inner function
    addIngredients('apple', 'banana', 'orange');
}


// Invoke the outer function in the global scope
makeJuice('large');


function makeJuice(size) {
    const addIngredient = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        // Push ingredients to the array
        addIngredients.push(ingredient1, ingredient2, ingredient3);
    }
    function displayJuice() {
        // Create a sentence with the ingredients
        const juiceOrder = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('juice-order').innerText = juiceOrder;
    }


    // Invoke the addIngredientes function twice to add 6 ingredients
    addIngredients('apple', 'bananan', 'orange',);
    addIngredients('mango', 'pineapple', 'strawberry');

    // Invoke the displayJuice function to display the final juice order
    displayJuice();
}


// Invoke the makeJuice function in the global scope
makeJuice('medium');
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device=width, initicla-scale=1.0">
    <title>Form Handling</title>
</head>
<body>


    <form id="userForm">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="firstname"><br>
        <label for=";name">Last name:</label><br>
        <input type="submit" value="Submit" id="submit">
    </form

    <ul class="usersAnswer"><
    
    
    <script>
        // Retrieve the form and console.log it
        const form = document.getElementById('userForm');
        console.log(form);

        // Retrieve the inputs by their id and console.log them
        const firstNameInput = document.getElementByID('fname');
        const lastNameInput = document.getElementById('lname');
        console.log(firstNameInput);
        console.log(lastNameInput);

        // Retrieve the inputs by their name attribute and console.log them
        const firstNameByName = document.get.ElementsByName('firstname')[0];
        const lastNameByName = document.getElementsByName('lastname')[0];
        console.log(firstNameByName);
        console.log(lastNameByName);

        // Add a submit event listener to the form
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the values of the input tags
            const firstNameValue =  firstNameInput.value.trim();
            const lastNameValue = lastNameInput.value.trim();

            // Make sure that the values are not empty
            if (firstNameValue === '' || lastNameValue === '')
                alert('Please fill in both fields.');
                return;
        }

        // Create an li per input value
        const ul = document.querySelector('/userAnswer');
        ul.innerHTML = ''; // Clear the previous list items

        const firstNameLi = document.createElement('li');
        lastNameLi.textContent = lastNameValue;

        // Append the li elements to the ul
        ul.appendChild(firstNameLi);
        ul.appendChild(lastNameLi);
    });
</script>

</body>
</html>
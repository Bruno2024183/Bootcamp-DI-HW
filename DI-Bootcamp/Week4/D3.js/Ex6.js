<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=devive-width, initial-scale=1.0">
    <title>Social Network Navigation</title>
</head>
<body>
    <div id="navBar">
        <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Friends</a></li>
            <li><a href="#">Messenger</a></li>
            <li><a href="#">My Pics</a></li>
        </ul>
    </div>


    </div>

    <script src="script,js"></script>
</body>
</html>


// 1. Change the value of the id attribute from navBar to socialNetworkNavigation
const navBarDiv = document.getElementById('navBar');
navBarDiv.setAttribute('id', 'socialNetworkNavigation');

// Create a new <li> element
const newLi = document.createElement('li');

// Create a new text node with "Logout"
const logoutText = document.createTextNode('Logout');

// Append the text node to the <li> element
newLi.appendChild(logoutText);

// Append the new <li> to the <ul>
ulElement.appendChild(newLi);

// 3. Retrieve the first and last <li> elements from the <ul>
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

// Display the text of each link
console.log('First link:', firstLi.textContent);
console.log('Last link:', lastLi.textContent); 

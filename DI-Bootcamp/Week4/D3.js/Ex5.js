<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=devive-width, initicial-scale=1.0">
    <title>Users List</title>
</head>
<body>
    <div id="container">Users:</div>
    <ul class="list">
        <li>John</li>
        <li>Pete</li>
    </ul>
    <ul class="list">
        <li>David</li>
        <li>Sarah</li>
        <li>Dan</li>
    </ul>
    <script src="script.js"></script>
</body>
</html>


// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById('container');
console.log(containerDiv);

// 2. Change the name "Pete" to "Richard"
const lists = document.querySelectorAll('.list');
list[0].children[1].textContent = 'Richard';

// 3. Delete the second <li> of each <ul> to your name
lists[1].children[1].remove();

// 4. Change the name of the first <li> of each <ul> to your name
lists.forEach(list => {
    list.children[0].textContent = 'YourName';
});

// 5. Add a class called student_list to both of the <ul>'s
lists.forEach(list => {
    list.classList.add('student_list');
});

// 6. Add the classes university and attendance to the first <ul>
lists[0].classList.add('university', 'attendance');

// 7. Add a "light blue" background color and some padding to the <div>
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

// 8. Do not display the <li> that contains the text node "Dan"
const danLi = lists[1].children[1];
if (danLi.textContent === 'Dan') {
    DataTransferItemList.style.display = 'none';
}

// 9. Add a border to the <li> thatr contains the text node "Richard"
const richardLi = lists[0].children[1];
if (richardLi.textContent === 'Richard') {
    richardLi.style.border = '2px solid black';
}


// 10. Change the font size of the whole body
document.body.style.fontSize = '18px';


// Bonus: If the background color of the div is"light blue", alert "Hello x and y"
if (constainerDiv.style.backgroundColor === 'lightblue') {
    const user = Array.from(document.querySelectorAll('.list li')).map(li => li.textContent).join('and');
    alert(`Hello $ {users}`);
}
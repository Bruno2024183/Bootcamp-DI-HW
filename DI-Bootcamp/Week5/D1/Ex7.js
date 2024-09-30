<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewprt" content="width=device=width, initial-scale=1.0">
    <title>Welcome John</title>
    <style>
        /* Basic stylinh for the navbar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items:center;
            background-color: #333;
            pedding: 10px;
            color: whote;
        }

        .navbar img {
            width: 40px;
            height: 40;
            border-radius: 50%
            margin-right: 10px;
        }

        .user-info {
            display: flex;
            align-items: center;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <div class="logo">My Website/div>
        <!-- The user info will be added here -->
        </div>

        <script src="script.js"></script>  

    </body>  
    </html>       



    (function(userName)) {
        // Create a new div to hold the user's name and profile picture
        const userInfoDiv = document.createElement('div');
        userInfoDIv.className = 'user-info';

        // Create an img element for the profile picture
        const profilePic = document.createElement('img);
        profilePic.src = 'https://via.placegholder.com/40'; //Placeholder image URL
        profilePic.alt = `${s Profile Picture`;
        

        // Create a span element to hold the user's name
        const userNameSpan = document.createElement('span');
        userNameSpan.textContent = userName;

        // Append the profile picture and user name to the userInfoDiv
        userInfoDiv.appendChild(profilePic);
        userInfoDiv.appendChild(userNameSpan);

        // Append the userInfoDiv to the navbar
        document.querySelector('.navbar').appendChild(userInfoDiv):
        
        
        })('John'); // Self-invoking function with 'John' as the argument
        
        
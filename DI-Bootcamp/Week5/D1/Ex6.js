<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fortune Teller</title>
</head>
<body>


    <div id="fortuine"></div>


    <script>
        (function(numberOfChildren, partnerName, location, jobTItle) {
            const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
            document.getElementById('fortune').textContent = sentence;
        })(3, "Akex", "Paris", "Software Developer");
    </script>

</body>
</html>
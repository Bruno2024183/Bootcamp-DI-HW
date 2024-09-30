// read-directory.js

const fs = require('fs');

// Read the list of files in the current directory
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Display the list of files
    console.log('Files in the directory:');
    files.forEach(file => {
        console.log(file);
    });
});

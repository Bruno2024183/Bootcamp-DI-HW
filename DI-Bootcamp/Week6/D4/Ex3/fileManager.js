// fileManager.js

const fs = require('fs');

// Function to read a file's content
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
    } else {
      callback(data);
    }
  });
}

// Function to write content to a file
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      callback();
    }
  });
}

// Export the functions
module.exports = {
  readFile,
  writeFile,
};

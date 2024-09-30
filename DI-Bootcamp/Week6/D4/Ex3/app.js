// app.js

const { readFile, writeFile } = require('./fileManager');

// Read the content of "Hello World.txt"
readFile('Hello World.txt', (data) => {
  console.log(`Content of Hello World.txt: ${data}`);

  // Write to "Bye World.txt"
  writeFile('Bye World.txt', 'Writing to the file', () => {
    console.log('Successfully wrote to Bye World.txt');
  });
});

node app.js

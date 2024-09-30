// app.js

// Require the chalk package
const chalk = require('chalk');

// Use chalk to print colorful messages
console.log(chalk.blue('Hello, world in blue!'));
console.log(chalk.red.bold('This is a bold red message!'));
console.log(chalk.green.underline('Green and underlined text.'));
console.log(chalk.yellow.bgMagenta('Yellow text on magenta background.'));
console.log(chalk.cyan('Cyan message with a ', chalk.magenta('nested magenta'), ' word!'));

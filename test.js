//Import logfile
var logfile = require('./index.js');

//Get the file
var file = new logfile('./log.txt', { console: true });

//Print the file path
console.log(file.path());

//Print a fatal message
file.fatal('This is a fatal message');

//Print an error message
file.error('This is an error message');

//Print a warning message
file.warning('This is a warning messsage');

//Print a notice message
file.notice('This is a notice message');

//Print an info message
file.info('This is an info message');

//Print a done message
file.info('This is a done message');

//Close the file
file.end();

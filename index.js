//Import dependencies
var path = require('path');
var log = require('nutty-log');

//Log file object
 var file = function(p, opt)
 {
   //Check the options
   if(typeof opt !== 'object'){ var opt = {}; }

   //Save the encoding
   this._encoding = (typeof opt.encoding === 'string') ? opt.encoding : 'utf8';

   //Save the file path
   this._path = path.resolve(process.cwd(), p);

   //Open the file
   this._stream = fs.createWriteStream(this._path, { flags: 'a', defaultEncoding: this._encoding });

   //Return this
   return this;
 };

//Get the file path
file.prototype.path = function(){ return this._path; };

//Add a log message to file
Object.keys(log.levels).forEach(function(level)
{
  //Add the level message
  file.prototype[level] = function(text)
  {
    //Get the message log
    var message = log.message(level, text);

    //Save the log file
    this._stream.write(message);

    //Return this
    return this;
  }
});

 //Close the file
 file.prototype.end = function(){ this._stream.end(); };

 //End alias
 file.prototype.close = function(){ this._stream.end(); };

 //Exports to node
 module.exports = file;

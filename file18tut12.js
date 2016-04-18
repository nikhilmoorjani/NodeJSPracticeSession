/**
 * Created by nikhil on 17-Apr-16.
 */

//core modules -- already defined by node js
var fs = require('fs'); //filesystem module
//don't include path: ./fs X

fs.writeFileSync("newfile.txt", "Text from file18tut12");
console.log(fs.readFileSync("newfile.txt").toString());

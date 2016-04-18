/**
 * Created by nikhil on 17-Apr-16.
 */
//built in modules
var path = require('path');
var websiteHome = "Desktop/Nikhil//tuts/index.html"; //accidently typo //
var websiteAbout = "Desktop/Nikhil//tuts/about.html";

//PATH normalizes the file path for diff OS which may have /,\

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));

console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
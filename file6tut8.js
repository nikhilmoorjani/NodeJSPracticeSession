/**
 * Created by nikhil on 16-Apr-16.
 */
//Modules
//break code into diff files called modules
//group similar code together

//behind the scenes it is created always by node js as a blank exports object
//module.exports = {};

function printAvatar(){
    console.log("Avatar hereee");
}

function printChappie(){
    console.log("Chappie there");
}


//check file7tut8
module.exports.avatr = printAvatar;


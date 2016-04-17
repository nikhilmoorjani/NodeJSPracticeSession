/**
 * Created by nikhil on 16-Apr-16.
 */

//this keyword -- it's a reference to whatever object is calling it

var Bucky = {

    printFirstName:function(){
        console.log('My name is Bucky');
        console.log(this === Bucky);  //true
    }
}

Bucky.printFirstName(); //true

//The default calling context is global -- this doesn't belong to object so it is global
function doSomethingWorthless(){
    console.log('I\'m Worthless');
    console.log(this === global);  //true
}

doSomethingWorthless(); //true
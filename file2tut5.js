/**
 * Created by nikhil on 16-Apr-16.
 */
//everything is a reference in node

var Bucky = {
    favFood: "bacon",
    favMovie: "Chappie"
};

var Person = Bucky; //reference to Bucky
Person.favFood = "salad";

console.log(Bucky.favFood); //output == salad ??



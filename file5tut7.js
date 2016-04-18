/**
 * Created by nikhil on 16-Apr-16.
 */
//prototype: add cool methods & properties to the objects & classes

function User(){
    this.name = ""; //this refers to whatever object is calling it
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//use prototype to add additional methods functions to User class
User.prototype.uppercutfunc = function uppercutfunc(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);

};

Wendy.uppercutfunc(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//add new property using prototype
User.prototype.magic = 60;

console.log(Bucky.magic);
console.log(Wendy.magic);
/**
 * Created by nikhil on 16-Apr-16.
 */
//more on modules

//any code inside this block gets exported
module.exports = {
    printAvtr: function(){
        console.log("Avatar");
    },

    printMov2: function(){
        console.log("movie 2");
    },
    favMovie: "The Matrix"
};

//see file9tut9 for calling this export
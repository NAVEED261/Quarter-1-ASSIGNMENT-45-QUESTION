// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the show_magicians function
function show_magicians(magicians) {
    // Print the name of each magician in the array
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the make_great function to modify the array of magicians
function make_great(magicians) {
    // Use map to add "the Great" to each magician's name
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
}
// Create an array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great to modify the array of magicians
var greatMagicians = make_great(magicianNames);
// Call show_magicians to see that the list has been modified
show_magicians(greatMagicians);

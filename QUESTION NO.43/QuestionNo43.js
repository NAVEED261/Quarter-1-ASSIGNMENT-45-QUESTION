// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the show_magicians function
function show_magicians(magicians) {
    // Print the name of each magician in the array
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the make_great function to create a new array with "the Great" added
function make_great(magicians) {
    // Use map to add "the Great" to each magician's name in a new array
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
}
// Create an array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array to create a new array with "the Great" added
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicians);

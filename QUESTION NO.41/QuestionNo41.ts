// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    // Print the name of each magician in the array
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magicianNames);

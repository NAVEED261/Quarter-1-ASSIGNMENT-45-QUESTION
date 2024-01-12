// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    // Print the name of each magician in the array
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Define the make_great function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    // Use map to add "the Great" to each magician's name
    const greatMagicians = magicians.map((magician) => `${magician} the Great`);

    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great to modify the array of magicians
const greatMagicians: string[] = make_great(magicianNames);

// Call show_magicians to see that the list has been modified
show_magicians(greatMagicians);

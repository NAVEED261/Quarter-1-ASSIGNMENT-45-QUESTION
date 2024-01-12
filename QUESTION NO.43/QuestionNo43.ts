// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    // Print the name of each magician in the array
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Define the make_great function to create a new array with "the Great" added
function make_great(magicians: string[]): string[] {
    // Use map to add "the Great" to each magician's name in a new array
    const greatMagicians = magicians.map((magician) => `${magician} the Great`);

    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great with a copy of the array to create a new array with "the Great" added
const greatMagicians: string[] = make_great([...magicianNames]);

// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicians);



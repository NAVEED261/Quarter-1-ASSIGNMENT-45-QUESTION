// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Define the make_shirt function
function make_shirt(size, message) {
    // Print a sentence summarizing the size and message
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
// Call the function with specific size and message
make_shirt("Large", "Hello, World!");

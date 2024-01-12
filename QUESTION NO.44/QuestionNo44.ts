// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Define the order_sandwich function
function order_sandwich(...items: string[]): void {
    // Print a summary of the sandwich being ordered
    console.log("Sandwich ordered with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log(); // Add an empty line for clarity
}

// Call the function three times with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Swiss");
order_sandwich("Chicken", "Bacon", "Avocado", "Tomato");

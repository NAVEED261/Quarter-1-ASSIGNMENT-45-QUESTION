// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = [
    "Honda Motorcycle",
    "Honda City",
    "Honda Civic",
    "BMW",
    "Audi R-8",
];
vehicles.map(function (item) { return console.log("I would like to own a ".concat(item)); });

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Define the car_info function
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Create an object to store information about the car
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add optional information to the car object
    options.forEach(function (option) {
        var _a = Object(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and two additional name-value pairs
var carInfo = car_info("Toyota", "Camry", ['color', "Blue"], ['year', 2022]);
// Print the object returned to ensure all information was stored correctly
console.log(carInfo);

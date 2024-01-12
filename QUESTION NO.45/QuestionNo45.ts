// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Define the car_info function
function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    // Create an object to store information about the car
    const car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add optional information to the car object
    options.forEach(option => {
        const [key, value] = Object(option)[0];
        car[key] = value;
    });

    return car;
}

// Call the function with required information and two additional name-value pairs
const carInfo = car_info("Toyota", "Camry", ['color', "Blue"], ['year', 2022]);

// Print the object returned to ensure all information was stored correctly
console.log(carInfo);

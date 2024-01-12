// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guest = ["naveed", "fatima", "umaima", "ibrahim", "aqsa"];
var canNotAttend = "naveed";
var newGuest = "fareed";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.unshift("qadeer");
var middleGuest = "asif zerdari";
var middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, middleGuest);
guest.push("altaf hussain");
console.log(guest);
guest.map(function (item) { return console.log("Dear ".concat(item, ", you are specially invited to a dinner.")); });
console.log(guest.length + " " + "peoples " + " " + "are invited a dinnner");

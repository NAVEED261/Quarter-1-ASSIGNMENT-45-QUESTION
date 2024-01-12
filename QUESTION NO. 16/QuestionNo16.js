// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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

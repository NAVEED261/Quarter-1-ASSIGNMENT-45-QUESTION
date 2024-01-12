// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest: string[] = ["naveed","fatima","umaima","ibrahim","aqsa"];
let canNotAttend:string = "naveed";
let newGuest:string = "fareed";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.unshift("qadeer");
let middleGuest:string = "asif zerdari";
let middleIndex:number = guest.length / 2;
guest.splice(middleIndex, 0, middleGuest);
guest.push("altaf hussain");
console.log(guest);
guest.map((item)=>console.log(`Dear ${item}, you are specially invited to a dinner.`))
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

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
console.log(guest.length + " " + "peoples " + " " + "are invited a dinnner")
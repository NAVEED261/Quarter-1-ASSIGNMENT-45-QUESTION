// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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
guest.map((item)=>console.log(`Dear ${item}, you are not invited to a dinner.`))
console.log("i can invite only two people to dinner");
while(guest.length > 2){
    let removeGuest = guest.pop();
    console.log(`Dear ${removeGuest}, you are not invited to the dinner`);
}
guest.map((item)=>
console.log(`Dear ${item}, you are  now not invited to the dinner`));
guest.pop();
guest.pop(),
console.log(guest)



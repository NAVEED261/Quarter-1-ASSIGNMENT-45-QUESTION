// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guest:string[] = ["naveed","fatima","umaima","ibrahim","aqsa"];
console.log(guest);
let canNotAttend:string = "hafiz naveed";
console.log(canNotAttend + " " + "can't make it for dinner");

let newGuest:string = "fareed";
guest[guest.indexOf(canNotAttend)] = newGuest;
guest.map((item)=>
console.log(`Dear ${item}, you are specially invited a dinner`));
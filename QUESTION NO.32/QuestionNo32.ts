// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let current_users: string[] = ["user1", "user2", "admin", "john_doe", "alice123"];
let new_users: string[] = ["alice123", "new_user", "user3", "bob_smith", "user4"];

for (let newUsername of new_users) {
    if (current_users.includes(newUsername)) {
        console.log(`Sorry, the username '${newUsername}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Great! The username '${newUsername}' is available.`);
    }
}

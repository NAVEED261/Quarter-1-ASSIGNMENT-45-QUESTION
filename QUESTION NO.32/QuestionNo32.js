// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var current_users = ["user1", "user2", "admin", "john_doe", "alice123"];
var new_users = ["alice123", "new_user", "user3", "bob_smith", "user4"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsername = new_users_1[_i];
    if (current_users.includes(newUsername)) {
        console.log("Sorry, the username '".concat(newUsername, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Great! The username '".concat(newUsername, "' is available."));
    }
}

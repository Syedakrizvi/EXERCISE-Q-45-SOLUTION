var current_users = ["saba", "admin", "sana", "sara", "kaneez"];
var new_users = ["noreen", "nousheen", "nazia", "admin", "sahiba"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});

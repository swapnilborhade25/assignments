"use strict";
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["MANAGER"] = "Manager";
    UserRole["VIEWER"] = "Viewer";
})(UserRole || (UserRole = {}));
let users = [];
function createUser(user) {
    users.push(user);
}
createUser({
    id: 101,
    name: "Mukul",
    email: "mukul@gmail.com",
    role: UserRole.ADMIN
});
createUser({
    id: 102,
    name: "Shubham",
    email: "shubham@gmail.com",
    role: UserRole.MANAGER
});
// console.log(users);
// get all users
function getAllUser() {
    return users;
}
console.log(getAllUser());
// get single user 
function getSingleUser(id) {
    // return users[i];
    return users.find(user => user.id === id);
}
console.log(getSingleUser(101));
// update user 
function updateUser(id, name) {
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = name;
    }
}
updateUser(101, "Kartik");
console.log(getSingleUser(101));
// delete user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}
deleteUser(101);
console.log(users);

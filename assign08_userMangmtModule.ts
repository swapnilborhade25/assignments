enum UserRole {
    ADMIN = "Admin",
    MANAGER = "Manager",
    VIEWER ="Viewer"
}

interface User {
     id : number;
     name : string ;
     email : string;
     role : UserRole;
}

let users : User [] =[];

function createUser (user : User) : void    {
    users.push(user);
}

createUser({
   id : 101,
   name : "Mukul",
   email : "mukul@gmail.com",
   role : UserRole.ADMIN 
});

createUser({
    id : 102,
    name : "Shubham",
    email : "shubham@gmail.com",
    role : UserRole.MANAGER
});

// console.log(users);

// get all users
function getAllUser() :User[] {
    return users;
}
console.log(getAllUser());

// get single user 

function getSingleUser(id : number) : User | undefined {
    // return users[i];
    return users.find(user => user.id === id);
}
console.log(getSingleUser(101));

// update user 
function updateUser(id : number , name : string): void {
    const user = users.find(user => user.id === id);
    if (user){
        user.name = name;
    }
}
updateUser(101,"Kartik");
console.log(getSingleUser(101));

// delete user
function deleteUser (id : number): void {
    users = users.filter(user => user.id !== id);
}

deleteUser(101);
console.log(users);

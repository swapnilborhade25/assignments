
// creating employees object array
const employees =[
    {
        id:1,
        name : "Swapnil",
        department : "IT",
        salary : 60000
    },
    {
        id :2,
        name : "Rahul",
        department : "Finance",
        salary : 50000
    },
    {
        id : 3,
        name : "Rutuja",
        department : "HR",
        salary : 40000
    },
    {
        id : 4,
        name : "Sam",
        department : "IT",
        salary : 45000
    }
]
// console.log(employees);

console.log("filter by department")

//filter by department
const itEmployee = employees.filter( employee => {
    return employee.department === "IT";
});
console.log(itEmployee);


// sorted by salary
console.log("Descending sorting ")
const sortBySalary = [...employees].sort((a,b) =>{
    return b.salary - a.salary;
});

// [...employees] is a spread operator which makes new copy of array

console.log(sortBySalary);



const employees = [
    {
        id : 101,
        name : "Sanchit",
        designation : "tester",
        salary : 56000
    },
    {
        id : 102,
        name : "Hardik",
        designation : "developer",
        salary : 76000
    },
    {
        id : 103,
        name : "Shubham",
        designation : "developer",
        salary : 88000
    },
    {
        id : 104,
        name : "samarth",
        designation : "hr",
        salary : 74000
    }
]

// using arrow function filter by department
const filterByDeprtment = (designation) =>{
    return employees.filter(emp => emp.designation === designation);
};

console.log(filterByDeprtment("developer"));

// function//
// console.log(filterByDeprt("developer"));

// function filterByDeprt (designation){
//     return employees.filter(function (employee){
//         return employee.designation === designation;
//     });
// }
//************************************ */

// sorting salary function
console.log(sortSalary());
function sortSalary (){
    return [...employees].sort((a,b) => {
        return b.salary - a.salary;
    });
};
//*********************************** */

// using arrow function
console.log("Sorting");

let sortByArrowFunc = ()=>{
    return [...employees].sort((a,b) => b.salary - a.salary);
};
console.log(sortByArrowFunc());


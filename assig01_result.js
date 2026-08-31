let math = Number(prompt("Enter math marks (0-100) "));
let eng = Number(prompt("Enter english marks (0-100)"));
let phy = Number(prompt("Enter physics marks (0-100)"));
let che = Number(prompt("Enter chemistry marks (0-100)"));
let bio = Number(prompt("Enter biology marks (0-100)"));

getResult(math,eng,phy,che,bio);

function getResult (math,eng,phy,che,bio){
    let marks =  [math,eng,phy,che,bio];
    let sum = 0;
   
    for(let val of marks){
        sum +=val;
    }
    let avg = sum / marks.length;
    console.log(`the sum of the subject is ${sum}`);
    console.log(`the avarage marks is ${avg}`);

    if (avg >= 35){
        console.log("Candidate are Passed");
    }else{
        console.log("Candidate are Failed")
    }
}


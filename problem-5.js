// Problem-05: Exam Result Report Generator
function  resultReport( marks ) {
          // You have to write your code here

if(!Array.isArray(marks)){
    return "Invalid"; //Checking Validation
}

let pass = 0;
let fail = 0; 
let totalSum = 0;

for(let i = 0; i < marks.length; i++){
    if(marks[i] >= 40){
        pass++;
    }
    else{
        fail++;
    }
}
for(let i = 0; i < marks.length; i++){
   totalSum += marks[i];
}
let average= totalSum / marks.length;

//Checking empty array and fixed (NaN)
if(marks.length === 0){
     average = 0; 
}
else{
    average = totalSum / marks.length;
}

let finalScore = 'finalScore: ' + Math.round(average) + ', pass: ' + pass + ', fail: ' + fail;
return finalScore;

}

let output = resultReport(
[98, 87, 67, 91, 92, 33, 87]
);
console.log(output);
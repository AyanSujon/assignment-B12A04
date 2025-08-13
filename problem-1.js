// Problem-01 : Train TT's Fine Calculator 

function totalFine( fare ) {
    if(fare <=0 || typeof fare !== "number"){
        return "Invalid";
    }
          // You have to write your code here
    let fine = fare *(20/ 100) + 30;
    let result = fare + fine;
    return result;
}
let output = totalFine(200);
console.log(output);


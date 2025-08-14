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

// =====================================================

// Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {
          // You have to write your code here
if(typeof str !== "string"){
    return "Invalid";
}
let cleanAndCapitalize = str.split(" ").join("").toUpperCase();
return cleanAndCapitalize;
}

// =====================================================
// Problem-03 : FIFA Best Team Award 
function  bestTeam( player1, player2 ) {
          // You have to write your code here
          if( typeof player1 !== "object" || typeof player2 !== "object" ){
            return "Invalid";
          }
          let countPlayer1 = player1.foul + player1.cardY + player1.cardR;
          let conuntPlayer2 = player2.foul + player2.cardY + player2.cardR;

          if(countPlayer1 < conuntPlayer2){
            return player1.name;
          }
          else if(countPlayer1 == conuntPlayer2){
            return "Tie";
          }
          else{
            return player2.name;
          }
}

// =====================================================

// Problem-04: Same Same But Different  😕 

function  isSame(arr1 , arr2 ) {
          // You have to write your code here
        if(!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "Invalid";
        }
        if (arr1.length !== arr2.length) {
            return false;
        }
          for(let i = 0; i < arr1.length; i++){
            if(typeof arr1[i] !== "number" || typeof arr2[i] !== "number"){
            return false;
            }
            if( arr1[i] !== arr2[i]){
              return false;
            }
          } 
          return true;

}

// =====================================================

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

//Checking empty array and fix (NaN)
if(marks.length === 0){
     average = 0; 
}
else{
    average = totalSum / marks.length;
}

let finalScore = 'finalScore: ' + Math.round(average) + ', pass: ' + pass + ', fail: ' + fail;
return finalScore;

}

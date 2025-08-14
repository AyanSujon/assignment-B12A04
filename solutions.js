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














// =====================================================
// =====================================================
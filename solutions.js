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
















// =====================================================
// =====================================================
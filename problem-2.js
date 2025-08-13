// Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {
          // You have to write your code here
if(typeof str !== "string"){
    return "Invalid";
}
let cleanAndCapitalize = str.split(" ").join("").toUpperCase();
return cleanAndCapitalize;
}
let output = onlyCharacter("  h e llo wor   ld" );
console.log(output);
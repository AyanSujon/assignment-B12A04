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
            if(typeof arr1[i] !== "nunber" || typeof arr2[i] !== "nunber"){
            return false;
            }
            if( arr1[i] === arr2[i]){
                return true;
            }
            else{
                return false;
            }
          } 
}
let output = isSame([1 , 4 , 5], [1 , 4 , 5]
);
console.log(output);



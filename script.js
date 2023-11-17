function solution(A){
  //initialize result variable
  let result = 0;
// Using an XOR operation to iterate through elements in the array,XORING the elements twice will result in zero, showing the unpaired element
  for(let i = 0; i < A.length; i++){
  
    result ^= A[i];
  }
  return result;
}

const array1 = [9,3,9,3,9,7,9,3,9,3,9,3,9,3,9,3,9,3,9];
const unpairedElement = solution(array1);
console.log(unpairedElement);
// Expalantion
// XORING a number with itself is 0, (A XOR A = 0)
// XORING A XOR 0 = A IDENTIFYING THE UNPAIRED ELEMENT

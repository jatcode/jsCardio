
/*********************************************************************/
function reverseString(originalString){
  //First// return originalString.split('').reverse().join('')
/**Second
  let reversedString = ''
  originalString.split('')
  .map(letter=> {reversedString = letter + reversedString})
  return reversedString
*/
//THIRD
return originalString.split('')
  .reduce((reversedString, currChar)=>currChar + reversedString, '' )
}
/*-------------------------------------------------------------------*/
/*********************************************************************/
function isPalindrome(originalString){
  const original = originalString
  return reverseString(originalString) === originalString
  ? true
  : false
}
/*-------------------------------------------------------------------*/
/*********************************************************************/
function reverseInt(integer){
  // return parseInt(integer.toString().split('').reverse().join('')) *
  // Math.sign(integer)
  return parseInt(integer.toString().split('').reverse().join('')) * Math.sign(integer)
}
/*-------------------------------------------------------------------*/
/*********************************************************************/
function capitalizeFirstletter(string){

  return string.trim().toLowerCase().split(' ')
    // .map(word =>`original: ${word}, modified: ${word[0].toUpperCase()}${word.substr(1)}`)
    .map(word =>`${word[0].toUpperCase()}${word.substr(1)}`)
    .join(' ')
}
/*-------------------------------------------------------------------*/
/*********************************************************************/
function countMaxChars(string){
const charCounter = string.trim().toLowerCase().split('')
  .reduce((letrasObj,char)=>{
    if(char in letrasObj){
      letrasObj[char]++
    }else{
      letrasObj[char]=1
    }
    return letrasObj
    }
  ,{})

  let maxChar= 0
  let mostCommonChar= ''

  for (var character in charCounter) {
    if(charCounter[character]> maxChar) {
      mostCommonChar = character
      maxChar= charCounter[character]
    }
  }
  return mostCommonChar

}
/*-------------------------------------------------------------------*/



// const runningfun = reverseString('hello');
// const runningfun = isPalindrome('hello');
// const runningfun = isPalindrome('nolemonnomelon');
// const runningfun = reverseInt(-123456);
// const runningfun = capitalizeFirstletter(' la capital de rusia ES RUANDa');
const runningfun = countMaxChars(' la capital de rusia ES RUANDa');


console.log(runningfun);

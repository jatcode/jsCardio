// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  /////////////FIRST TRY////////////////////
  // return str
  // .split('')
  // .reverse()
  // .join('')
  /////////////SECOND TRY////////////////////
  // let letter='' 
  // for(let i = str.length-1; i>=0; i--){
  //   letter=letter + str[i]
  //   // console.log(splittedStr[i])
  // }
  // return letter
  /////////////THIRD TRY////////////////////
  // let letter =''  
  // for(let i = 0;i< str.length;i++){
    //   letter= str[i] + letter;
    // }
    // return letter
    /////////////FOURTH TRY  "FOR OF"////////////////////
    // let reverseString =''  
    // for( let leter of str){
      //   reverseString = leter + reverseString
      // }
      // return reverseString
      /////////////FIFTH TRY  "HIergh order functions"////////////////////
      // let revString=''
      
      // str
      // .split('')
      // .forEach(function(letter){
      //   revString = letter + revString
      // })
      // return revString
      // /////////////SIXTH TRY  "HIergh order functions"////////////////////
      // let revString=''
      // str
      // .split('')
      // .forEach(char=> {
      //   revString = char+ revString
      // })
      // return revString
      /////////////SEVENtH TRY  "REDUCE"////////////////////
      // let revString=''
      return str
      .split('')
      .reduce(
        (revString,currChar)=> currChar + revString, ''
      )
      // return revString
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const originalString= str
  return str.split('')
  .reverse()
  .join('') === originalString
  
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('')
  // return parseInt(revString)/*  UP until here it only takes positives */
  return parseInt(revString) * Math.sign(int)/*  UP until here it only takes positives */

}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let capitalizedStr = ''
  capitalizedStr = str.toLowerCase().split(' ').map(
    word=> word[0].toUpperCase()+ word.substr(1)
  ).join(' ')
  
  return capitalizedStr
}


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let maxChar=0
  let mostCommonChar=''
  var objAppearances= str.split('').reduce((acc, currChar)=>{
    if(currChar in acc){
      acc[currChar]++
    }else{
      acc[currChar]=1
    }
    return acc
  },{})
  for(const letra in objAppearances){
    // console.log(`${letra}:${objAppearances[letra]}`)
    if(objAppearances[letra] >maxChar){
      maxChar = objAppearances[letra]    
      mostCommonChar=letra    
    }
  }
  return mostCommonChar
  // for(const character of acc) {
  //   console.log('demas ',character)
  // }
  

}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", 
// For multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i=1; i<=100; i++){
    if(i % 5===0 && i % 3===0) {
      console.log('FizzBuzz')
    }else
    if(i%3===0){
      console.log('Fizz')
    }else 
    if(i%5===0){ 
      console.log('Buzz')
    }else{
      console.log(i)

    }
  }
  return 'Done!!'  
}



// Call Function
// const output = reverseString('hello');
// const output = isPalindrome('hello');
// const output = isPalindrome('racecar');
// const output = isPalindrome('madam');
// const output = reverseInt(12345);// it works as it should
// const output = reverseInt(-12345);
// const output = capitalizeLetters('la primera oracion del dia');
// const output = maxCharacter('primera')
// const output = maxCharacter('javascripttttt')
const output = fizzBuzz('javascripttttt')

console.log(output);

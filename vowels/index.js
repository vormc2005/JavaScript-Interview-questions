// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let count = 0;
//     const vowelLeter= "aeiou"
//     for(let char of str.toLowerCase()){
//         console.log(char)
//       if(vowelLeter.includes(char)){
//           count++
//       }  
//     }
//     return count
// }


function vowels(str) {
  const matches =  str.toLowerCase().match(/[aioue]/gi);
  console.log(matches)
 return matches ? matches.length : 0
}

vowels("hello")

module.exports = vowels;

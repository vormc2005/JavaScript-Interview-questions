// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {
    charMap ={}
    let max =0
let maxChar = ''
 for(let char of str){
    !charMap[char] ? charMap[char]=1 : charMap[char]++
 }
    // console.log(charMap)
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return(maxChar) 
}

maxChar("Hello there")



module.exports = maxChar;

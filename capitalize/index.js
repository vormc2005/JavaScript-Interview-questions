// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    splitStr = str.split(" ")
    // console.log(splitStr)
    capitalizedArray =[]

    for(let word of splitStr){
        let sliceddWords = word.slice(1)
        // console.log(sliceddWords)
        let firstCapital = (word[0].toUpperCase())
        let joined = (firstCapital+sliceddWords)
        capitalizedArray.push(joined)
       
      
    }
    let result =capitalizedArray.join(" ")

return(result)


}

capitalize("I will make this happen")

module.exports = capitalize;

//We are given array with numbers. 
//We need to print the lowest number that is not in the array
let givenArray = [1,2,3,5,6]
let numbersNotInOurArray= []


const compare =()=>{
for(i=1; i<10; i++){
    
    
    const missingNumbers = givenArray.includes(i)
    // console.log(missingNumbers)
    if(missingNumbers === false){
        // console.log(i)
        numbersNotInOurArray.push(i)
        minNum = Math.min(...numbersNotInOurArray)
        return minNum
        
    }
}

}


compare()
console.log(minNum)


// const anagram = (a, b)=>{
//   //find if number of characters are the same
    
//   const storage ={}
//   const longer_String = a.length>b.length ? a.toLowerCase() : b.toLowerCase()
//   const shorter_String = a.length<=b.length ? a.toLowerCase() : b.toLowerCase()
//   let count=0
//  //take longer string and count characters
//  for(let letter of longer_String ){
//      if(storage[letter]) {
//          storage[letter]+= 1;        
//     }  else {
//     storage[letter]=1
// }

// }
// for(let letter of shorter_String){
//     if(storage[letter] && storage[letter]>0){
//         storage[letter] -=1
//         count++
//     }
// }


// // Compare second string

// console.log(storage)
// console.log(count)
// }
// anagram("Hello worldssss", "dlrow olleh")


const anagram = (a, b)=>{
    const storage ={}
    let count=0
//sort characters, and turn into one string    
    const newA = a.toLowerCase().split('').sort().join('')
    // console.log(newA)
    const newB = b.toLowerCase().split('').sort().join('')
    let longer
    let shorter
//comparing lengths and checking which string is longer
    if(newA.length>newB.length){
        longer = newA
        shorter = newB
       
    }else {
    longer = newB
    shorter = newA
    }
    //count every letter in longer string 
    for(let letter of longer){
        if(storage[letter]){
            storage[letter]++
        }else{
            storage[letter]=1
        }
    }

    for(let letter of shorter){
        if(storage[letter] ){
            storage[letter]--
            count ++
        }
    }

    let diff_of_smaller= (shorter.length - count)
    // console.log(diff_of_smaller)
    let dif_of_larger = (longer.length - shorter.length)
    // console.log(dif_of_larger)
    console.log((2*diff_of_smaller)+dif_of_larger)

    //check if thereare the same letters in shorter string

// console.log(storage)   
// console.log(count)
  }
  anagram("cde", "abc")
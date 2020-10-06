

function twoStrings(s1, s2) {
    let obj = {}   
    let yesLetter = []

    for(let letter of s1){
       if(obj[letter]){
        obj[letter] += 1
       } else{
           obj[letter] = 1
       }
    }
    // console.log(obj)
    for(let i=0; i< s2.length; i++){
        let letter = s2[i]
        // console.log(letter)
        if(!obj[letter] || obj[letter] <1){
            // console.log("No")
          
        }else{
            // console.log('Yes')
           
            yesLetter.push(letter)
        }

    }
    if (yesLetter.length){
        console.log("YES")
    }else{
        console.log("NO")
    }
    // console.log(yesLetter)

}

twoStrings('Hi', 'World')
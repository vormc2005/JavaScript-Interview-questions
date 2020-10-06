const repeatedString=(s,n)=>{
    let countofA = 0;

    if(n>=s.length){

       let occurenceA= (s.match(new RegExp('a', 'g')) || []).length
        console.log(occurenceA)


        // let occurenceA = [...s].filter(e=>e==='a').length;
        countofA = Math.floor(n/s.length)*occurenceA
    }
    let tailString = n % s.length
    console.log(tailString)
    for(let i = 0; i< tailString; i++){
        if(s[i] ==='a'){
            countofA ++
        }
    }
    console.log(countofA)
}


repeatedString('bba', 10)







// const countA = (s, n)=>{
//     let count = 0;
// //1. create duplicated string
    
//     let newStr = s
//     let repeatAmount 

//     if(n/s.length % 0){
//         repeatAmount = n/s.length
//     }else{
//        repeatAmount = Math.ceil(n/s.length)
//     }

//     console.log(repeatAmount)
//     // console.log(newStr)
//     if(newStr.match(/^[a]+$/)){
//         count=n
//     }else{
//         newStr = s.repeat(repeatAmount).slice(0, n)
//         for(let letter of newStr){
//             if(letter ==="a"){
//                 count ++
//             }
//         }
//     //    count = (newStr.match(new RegExp('a', 'g')) || []).length
      
//     }
//     console.log(count)


// }

// countA("kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm", 736778906400)

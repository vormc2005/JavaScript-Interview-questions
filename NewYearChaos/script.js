

const arr = [2,1,5,3,4]
const arr1 = [2,5,1,3,4]

const bribesCounter = (q)=>{
    const TOO_CHAOTIC = "Too chaotic"
    let total = 0;

    for(let cur_position = 0; cur_position < q.length; cur_position++){
        const original_posistion = q[cur_position]-1
        const diff = original_posistion - cur_position;
        // console.log(original_posistion)
        if(diff >2){
            return console.log(TOO_CHAOTIC)
        }
        for(let i =Math.max(0, original_posistion - 1); i< cur_position; i++){
            console.log(i)
            const positionOfAheadPerson = q[i]-1
        }
    }



    }
 

    let maxim = Math.max(0,3)
    console.log(maxim)
    
    // console.log(bribesCount)




// const bribesCounter = (a)=>{
//     let bribesCount = 0;
//     let tooChaotic
//    a.forEach((number, position)=>{
//     //    console.log(number)       
//        position +=1
//     //    console.log(position)
//     let dif = number-position
//     if( (dif>=3)){
//         tooChaotic = 'Too chaotic'

//         console.log(tooChaotic)
      
//     }
//       else if( (number - position)===2){
//            bribesCount +=2
//        }else if ( (dif === 1)){
//            bribesCount +=1
//        }else if(number===position){
//            bribesCount +=0
//        }
//    })
//    if(tooChaotic){
//        tooChaotic
//    }else{
//     console.log(bribesCount)
//    }
  
//     }
 
    bribesCounter(arr)
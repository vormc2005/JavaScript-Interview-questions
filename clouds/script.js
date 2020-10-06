

const c = [0,0,1,0,0,0,0,1,0,0]

const jumClouds = (arr)=>{
    //begginning position
    
    let jumps = 0
    //loop through array and of numbers
    for(let i=0; i<arr.length; i++){
        // console.log(i)
        // console.log(arr[i+1])
    //if number = 0 then position ++

        if(arr[i]===0 && arr[i+1]===0){              
            jumps ++
            i++           
        }else if (arr[i]===1 && arr[i+1]===0 ){           
            jumps ++
            i+2
        }    
        //  console.log(i)  
        
    }
    console.log(jumps)
}

jumClouds(c)


const sortThisArray =(a)=>{
    let count =0;
    for(let i=0; i<a.length;i++){
        for(let j =0; j<(a.length-1);j++){
            // console.log("i= " + i)
            // console.log("j= " + j)
            // console.log('lentgh= ' +(a.length-i-1))
            // console.log('a[i]= ' + a[i])
            // console.log('a[j]= '+ a[j])
            // console.log(a)
            if(a[j]>a[j+1]){
              const lesser  = a[j+1]
               a[j+1]= a[j];
               a[j]=lesser
               count++
            }
        }
        // console.log(a)
    }
   
console.log(count)
}

let arr = [6,4,1]
let arr1= [100,-40,500,-124,0,21,71]
sortThisArray(arr)
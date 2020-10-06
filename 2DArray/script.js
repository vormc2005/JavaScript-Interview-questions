

const a = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]





const hourGlass = (arr)=>{
    const sumArray = []
    let i = 0;
    let j = 0;
    let x = 0
    console.log(a[i][j])
    while(x<16){
        if(x === 4 || x === 8 || x === 12){
            i++;
            j=0;

        }
        let sum = a[i][j]+a[i][j+1]+a[i][j+2]+a[i+1][j+1]+a[i+2][j]+a[i+2][j+1]+a[i+2][j+2]
        j++
        sumArray.push(sum)
        x++

        
    }
    console.log(Math.max(...sumArray))
    console.log(sumArray)

}



hourGlass(a)
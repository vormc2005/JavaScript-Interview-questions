

const leftRotaion = (a, d)=>{

    while(d>0){       

        let removed = a.shift()
        a.push(removed)
        d--
        
    }
    console.log(a)

}

a = [1,2,3,4,5]
leftRotaion(a, 9)
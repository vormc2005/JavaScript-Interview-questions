

const checkMagazine=(magazine, note)=>{
    const words = {}
    let matchingWords = []
    magazine = magazine.split(' ');
    note = note.split(' ');
   
    magazine.forEach((word)=>{
       if(words[word]){
        words[word]+=1
       }else{
        words[word]=1
       }
            
     });
 
     for (let i=0; i<note.length; i+=1){
         let word = note[i]
         // console.log(word)
         if(!words[word] || words[word] < 1  ){
           console.log( "No")     
        
        }else{
            words[word]-=1
            matchingWords.push(word)
        }                      
             
         }
         console.log(matchingWords)
        if(matchingWords.length && matchingWords.length === note.length){
           return 'Yes'
        }else{
          return 'No'
        }
}




// cleanString("give me one grand night")
checkMagazine("give me one grand today night night", "give one grand grand today")
const {readFile, writeFile}=require('fs');
readFile('./Built-in Modules/content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first=result;
    readFile('./Built-in Modules/content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile('./Built-in Modules/content/third.txt',`Here is the result:${first},${second}`)
    })
    })
    
console.log("hai")
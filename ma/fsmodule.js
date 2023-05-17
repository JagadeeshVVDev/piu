// First Approach
const {readFileSync, writeFileSync}=require('fs');
  //Second Approach
 // const fs=require('fs')
 // fs.readFileSync
 const first=readFileSync('./Built-in Modules/content/first.txt','utf8')
 const second=readFileSync('./Built-in Modules/content/second.txt','utf8')
 //console.log(first,second)
writeFileSync('./Built-in Modules/content/third.txt',`Here is the result:${first},${second}`,{flag:'a'})

























 
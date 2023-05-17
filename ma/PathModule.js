const path=require('path')
console.log(path.sep)

const filepath=path.join('/Modules Examples/','subfolder','firstmodule.js')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'Modules Examples','subfolder','test.txt')
console.log(absolute)
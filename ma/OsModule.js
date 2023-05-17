const os=require('os')
//info about current user
const user=os.userInfo()
console.log(user)
//Method returns the system uptime in seconds
console.log(`The system uptime is${os.uptime()} seconds`)
//current os
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freememory:os.freemem()
}
console.log(currentOs)
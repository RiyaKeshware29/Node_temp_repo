// built-in : os module
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`My system uptime is : ${os.uptime()} seconds`);

// object for OS details by os methods
const currentObj = {
    name : os.type(),
    release :  os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}
console.log(currentObj);
/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
The node OS module provides information about the computer's operating system.
It gives operating system-related utility methods and properties.
*/

// syntax for including the OS module
const os = require("os");

// getting the plat form the os
var osPlatForm = os.platform();

// getting the Architecture
var osArchitecture = os.arch();

// getting the host name
var hostName = os.hostname();

// getting the total memory
var totalMemory = os.totalmem();

// getting the free memory
var freeMemory = os.freemem();

// getting the up time of your os
var osUpTime = os.uptime();

// getting the default temp file directory
var tempFileDir = os.tmpdir();

// getting the os type
var osType = os.type();

// getting your os relase date
var osRelease = os.release();

// getting your cpu info
var cpu = os.cpus();

// gathering the info outside the object
var cpuModel = cpu[0].model.toString();
var cpuSpeed = cpu[0].speed.toString();

// logging the info to the console.
console.log();
console.log("Your computers's operating system information");
console.log();
console.log(`Platform: ${osPlatForm}`);
console.log(`Architecture: ${osArchitecture}`);
console.log(`Host name: ${hostName}`);
console.log(`OS type: ${osType}`);
console.log(`OS release: ${osRelease}`);
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log(`OS uptime (seconds): ${totalMemory}`);
console.log(`OS defualt directory for temporary files: ${tempFileDir}`);
console.log();
console.log("CPU information");
console.log();
console.log(`Model: ${cpuModel}`);
console.log(`Speed: ${cpuSpeed} MHz`);

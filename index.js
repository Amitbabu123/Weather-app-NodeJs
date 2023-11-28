// REPL
//1: js expression
//2: use variable
//3: multiline code / loops
//4: use (_) to get the last result
// 5: we can use editor mode
// const namel ="Amit babu";
// console.log(namel);



// Creating a New file 

 const fs = require("fs"); 

//  fs.writeFileSync('read.txt', "Welcome to Amit Gautam ")
  //fs.writeFileSync('read.txt', "hi thapa technical, Welcome to Amit Gautam") //not create a new file changes previous file
//------>add a new data (not overwrite)
//   fs.appendFileSync("read.txt", " how are you i am fine")


// ---> Node.js includes an additional data type called buffer
// (not availble in browser's javascript)
// Buffer is mainly used store binary data,
// while reading from a file or receiving packets over the network.

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
//  its upper code provide buffer data
{/* <Buffer 68 69 20 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 41 6d 69 74 20 47 61 75 74 61 6d 68 6f 77 20 61 72 65 20 ... 34 more bytes>  */}
// const org_data = buf_data.toString();
// console.log(org_data);



// to read the file
//  fs.renameSync('read.txt','readwrite.txt');

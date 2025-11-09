const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setTimeout(() => console.log("immediate 1 finished"), 0);

fs.readFile("testfile.txt", () => {
  console.log("I/O finished");
});

console.log("hello  from the top-level code ");

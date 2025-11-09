const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setTimeout(() => console.log("immediate 1 finished"));

fs.readFile("testfile.txt", () => {
  console.log("I/O finished");
  console.log("-------------");
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setTimeout(() => console.log("immediate 2 finished"));
});

console.log("hello  from the top-level code ");

// PS C:\Users\DELL\Downloads\event-loop-practice> node .\eventloop.js
// hello  from the top-level code
// Timer 1 finished
// immediate 1 finished
// I/O finished
// -------------
// Timer 2 finished
// immediate 2 finished
// Timer 3 finished
// PS C:\Users\DELL\Downloads\event-loop-practice>

// //

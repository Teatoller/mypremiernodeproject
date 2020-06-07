var fs = require("fs");

// The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile("mynewfile2.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

var fs = require("fs");

// To delete a file with the File System module,  use the fs.unlink() method
fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

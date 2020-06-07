var fs = require("fs");

// To rename a file with the File System module,  use the fs.rename() method.
fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});

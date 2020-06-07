var fs = require("fs");

// If the file does not exist, an empty file is created:
fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

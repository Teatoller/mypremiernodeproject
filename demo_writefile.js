var fs = require("fs");

// The fs.writeFile() method replaces the specified file and content:
// If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile("mynewfile3.txt", "This is my script", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

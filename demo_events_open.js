var fs = require("fs");

// readStream object fires events when opening and closing a file
var rs = fs.createReadStream("./demofile.txt");
rs.on("open", function () {
  console.log("The file is open");
});

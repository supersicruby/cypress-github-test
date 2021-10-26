const fs = require("fs");
fs.rmdirSync("./cypress/reports", {recursive: true});
fs.rmdirSync("./output.html", {recursive: true});
const fs = require("fs");

/**
 * Reads data into memory and runs solution
 * @param {*} dirname - Directory to find data file
 * @param {*} filename - File name in dirname
 * @param {*} solution - solution function to run after processing
 */
module.exports = function (dirname, filename, solution) {
  fs.readFile(`${dirname}/${filename}`, function (err, data) {
    if (err) throw err;
    const array = data.toString().split("\n");
    solution(array);
  });
};

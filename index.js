const day = process.argv[2];
const part = process.argv[3];

if (!day || !part) {
  console.log('Error... no arguments found');
  console.log("run `npm start -- <day> <part>` to get the solution for a given day/part");
} else {
  console.log(`Running day ${day}, part ${part}...`)
  require('child_process').fork(`day_${day}/part_${part}.js`);
}


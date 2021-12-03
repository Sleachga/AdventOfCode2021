const setupAndRun = require('../common/setupAndRun');

function solution(data) {
  let count = 0;

  console.log(`${data[0]} (N/A - no previous measurement)`)
  for (let i = 1; i < data.length; i++) {
    const increased = data[i] > data[i - 1];
    console.log(`${data[i]} (${increased ? 'increased' : 'decreased'})`)
    if (increased) count++;
  }

  console.log(count);
}

setupAndRun(__dirname, 'data', solution);
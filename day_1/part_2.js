const data = require('./data.json');

let count = 0;

console.log(`${data[0]} (N/A - no previous measurement)`)
for (let i = 2; i < data.length - 1; i++) {
    const totalCur = data[i - 1] + data[i] + data[i + 1];
    const totalPrev = data[i - 2] + data[i - 1] + data[i];

    const increased = totalCur > totalPrev;
    if (increased) count++;

    console.log(`${totalCur} (${increased ? 'increased' : 'decreased'})`)
}

console.log('\nTotal Count: \n', count);
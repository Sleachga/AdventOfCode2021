const data = require('./data.json');

const position = {
    horizontal: 0,
    vertical: 0,
    aim: 0
}

data.forEach(step => {
    let [direction, magnitude] = step.split(' ');
    magnitude = parseInt(magnitude);

    switch (direction) {
        case 'forward':
            position.horizontal += magnitude;
            position.vertical += (position.aim * magnitude);
            break;
        case 'backward':
            position.horizontal -= magnitude;
            break;
        case 'down':
            position.aim += magnitude;
            break;
        case 'up':
            position.aim -= magnitude;
            break;
        default:
            throw Error('wtf happened...?  Bad input...');
    }
})

console.log(`Position -> ${position.horizontal} horizontal, ${position.vertical} vertical depth, ${position.aim} aim.`);
console.log(`${position.horizontal} x ${position.vertical} = ${position.horizontal * position.vertical}`);
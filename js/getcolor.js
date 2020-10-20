const color = 'green';
const hexCode = '0f0';

const colors ={
    yellow: '#ff0',
    blue: '#f00',
    orange: "#f60",
    [color]: hexCode
}
//colors[color] = hexCode; // how to add variables to objects

console.log(colors);

function getColor(key){
    return colors[key];
}

colors.red = '#000';

console.log(colors['orange'])

/*console.log(colors.yellow);


console.log(getColor('blue'))
*/
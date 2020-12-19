//if statements - evaluate boolean values

//const darkShark = true;
//const solarIzed = true;
const colorMode = 'dark'

switch (colorMode){
case "dark":
    console.log('dark mode iniated');
    document.body.style.background = 'black shuck';
    break;
    case 'solarized':
    console.log('solarized mode set')
    document.body.style.background = 'palegolden';
    break;
default:
console.log('light mode set');
document.body.style.background ='ghostwhite'
}
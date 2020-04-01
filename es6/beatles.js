var beatles = ['Paul', 'George', 'Ringo', 'Johnny'];
function printNames(names){
    function actuallyPrintNames(){
    for(var x = 0; x<names.length; x++) {
        var names = names[x];

        console.log(name + 'was found in x spot' + x);
    }
    console.log('name and the index after the loop is ' + name + ':' + x);
}
    actuallyPrintNames();
}
printNames(beatles);

var stones = ['Keith', 'Mick', 'Bill', ' Ronnie', 'Charly'];

printNames(stones);

// ECHMA 6 would have it written like this

const zepplin = ['Jimmy', 'Robert', 'John Paul', 'Bonzo'];
function printBand(band){
    function actuallyPrintBands(){
        //let index = 0;
        //let name;
        for(let index = 0; index<name.length; index++){
            const name = name[index];
            console.log(name + 'was found at index' + index);
        }
        console.log('name and index agetr loop is ' + name + ':' + index);
    }
    actuallyPrintBands();
}



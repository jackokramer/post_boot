var beatles = ['Paul', 'George', 'Ringo', 'Johnny'];
function printNames(names){
    function actuallyPrintNames(){
    for(var x = 0; x<names.length; x++){
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

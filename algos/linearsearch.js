let  grocceryList = ['bannana', 'milk', 'cake', 'tortilla', 'cookie'];

function linearSearch(key, array){
    //let key = 0;
    //const array = [];
    for(let x = 0; array.lenth; x++){
        if(array[x] == key){
            return x;
        }
    }
    return null;
}
console.log(linearSearch(grocceryList, 'cookie'));


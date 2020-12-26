/**
 * Write a function that splits an array (first arguement) into groups the length of size(second argument) and returns them as atwo dimentsional array.
 * 
 * EXAMPLE: 
 * chunky munkey (['a', 'b', 'c', 'd',], 2)should return (['a', 'b'] ['c', 'd'])
HINT: slice()
 */

function chunkyMonkey(values, size) {
    let array = [];
    let count = 0;
    while(count<values.length){
        array.push(values.slice(count, count+=size))
    }

    //for(let x = 0; array.length>x; x++){
    //    if(values[x]> size){
    //        array.slice(x)
    //    }
    //}
    return array;
}




/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});
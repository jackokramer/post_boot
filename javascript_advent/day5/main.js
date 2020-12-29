/**
 * REVERSE A STRING
 * 
 * Reverse the provided string
 * You may need to turn the string into an array before you can revese it
 * Your result must be a string
 * EXAMPLE:
 * 
 * reverseAString('helllo') returns 'ollleh';
 * reverseAString('Howdy') returns 'ydwoH';
 * 
 * Hints 
 * join()
 * split()
 * reverse()
 */

 function reverseAString(str) {
     let reversedStr = '';
     for(let x = str.length -1; x>=0; x--){
         reversedStr += str[x];
     }
     //return str.split('').reverse().join(''); Solution 1
     return reversedStr
}



/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});
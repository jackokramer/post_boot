/**
 * CENTURY FROM A YEAR
 * Given a year, return the century it is in. The first centruy spans from the yeat 1 up to and including year 100, the second from year 101 and up to and including the year 200,
 * 
 * EXAMPLE 
 * For yeat =1901, the output should be centuryFromYear(year) = 20
 * For yeat =1700, the output should be centuryFromYear(year) = 20
 * 
 * HINTS:
 * math.floor()
 */

function centuryFromYear(num) {
    //find baseline year/ century
    const century = year /100;
    //handle the edge case
    if(year % 100 ===0){
        return century;
    }
    //return all other cases
    return Math.floor(century)+1;
}


///

/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});
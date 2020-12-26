/**
 * DEPOSIT PROFIT
 * Ypu have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits
 * 
 * Example
 * For deposits =100 rate = 20 threshold = 170, the output should be depsitProfit(deposit, rate, threshold) = 3.
 * Each year the ammount of money on your account increases by 205 that throught the years balance would be:
 * year 0: 100;
 * year 1: 120;
 * year 2: 144;
 * year 3: 172.8;
 * 
 * Thus it would take 3 years for your balance to pass the threshold which is the answer.
 */

 function depositProfit(deposit, rate, threshold) {
     let currentAccount = deposit;
     let year = 0;
     while (threshold> currentAccount){
        currentAccount += currentAccount(rate/100); 
        year ++
     }
     return year
}



/**
* Test Suite 
*/
describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold)

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});
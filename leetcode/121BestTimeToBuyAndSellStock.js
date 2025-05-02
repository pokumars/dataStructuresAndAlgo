/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10pow5
0 <= prices[i] <= 10pow4 */

//simple case
// edge case

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /* 
    brute force
    track biggest difference
    for each value, go through and track difference and store biggest difference
    requires going through and going through again to 
    */
  // [7,1,5,3,6,4]
  let difference = Number.POSITIVE_INFINITY;
  for (let aIndex = 0; aIndex < prices.length; aIndex++) {
    for (let bIndex = aIndex; bIndex < prices.length; bIndex++) {
      const curDiff = prices[aIndex] - prices[bIndex];

      if (curDiff < 0 && difference > curDiff) {
        //console.log("new bigger profit ", curDiff, aIndex, bIndex);
        difference = curDiff;
      }
    }
  }
  const returnValue = difference < 0 ? Math.abs(difference) : 0;
  //console.log("Math.abs(difference) : 0 ", returnValue);
  return returnValue;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

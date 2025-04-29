/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
twoSum([3,3], 6);
twoSum([3,2,4], 6);

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 10to4
-109 <= nums[i] <= 10to9
-109 <= target <= 10to9
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // [11, 15, 2, 7,10,17] 9
  // go through array -> 9-11 = -2 THEN look if array has -2 IF yes, return 2 indices if no go to next index.
  //curindex and matchingIndex (1 level deeper)
  const dict = new Map();
  for (aIndex = 0; aIndex < nums.length; aIndex++) {
    dict.set(nums[aIndex], aIndex);
  }
  for (bIndex = 0; bIndex < nums.length; bIndex++) {
    const difference = target - nums[bIndex];
    // console.log(bIndex, difference);

    if (dict.has(difference) && bIndex !== dict.get(difference)) {
      //   console.log([bIndex, dict.get(difference)]);
      return [bIndex, dict.get(difference)];
    }
  }

  return [];
};

twoSum([11, 15, 2, 7, 10, 17], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBruteForce = function (nums, target) {
  // [11, 15, 2, 7,10,17] 9
  // go through array -> 9-11 = -2 THEN look if array has -2 IF yes, return 2 indices if no go to next index.
  //curindex and matchingIndex (1 level deeper)
  for (let aIndex = 0; aIndex < nums.length; aIndex++) {
    let difference = target - nums[aIndex];
    //console.log(nums[aIndex], difference);
    const foundIndex = nums.lastIndexOf(difference);
    if (foundIndex != -1 && foundIndex != aIndex) {
      console.log(
        `correct answer-> ${aIndex} ${nums[aIndex]} and ${foundIndex} ${nums[foundIndex]}`
      );
      return [aIndex, foundIndex];
    }
  }
  return null;
};

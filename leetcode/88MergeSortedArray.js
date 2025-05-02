/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1. */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * https://leetcode.com/problems/merge-sorted-array/
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /*  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    [1,2,3,0,0,0]index1  [2,5,6]index2
    tracker

    track m+n from length to 0. If nums2 finishes, you can end there.
    So we dont know how many iterations therefore while loop. while index2 is greater than 0
    track index of nums1 and nums2 with index1 and index2
    iteration 1
        tracker = 5, index1=m:2=3, index2=n:2=6 nums1 <nums2 -> move nums 2 value and decreaes index2
    iteration 2
        
    */
  let index1 = m - 1;
  let index2 = n - 1;
  let tracker = m + n - 1;
  console.log(index1, index2, tracker);
  while (index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[tracker] = nums1[index1];
      index1--;
    } else {
      nums1[tracker] = nums2[index2];
      index2--;
    }
    tracker--;
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
console.log(merge([1], 1, [], 0));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

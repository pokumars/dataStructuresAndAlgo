

  // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

/* 
1290. Convert Binary Number in a Linked List to Integer
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0
 
Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

 */
function getDecimalValue(head: ListNode | null): number {
  let currentNode = head;
  let str = '';
  
  while (currentNode !== null) {
    //concatenate elements of linked list
      str += currentNode?.val;
      currentNode = currentNode?.next;
  }
  return binaryToDecimal(str);  
};

const binToDecDoublingMethod = (head: ListNode | null) => {
  let accumulator = 0;

  while(head!==null){
    accumulator=(accumulator*2) + head.val
    head = head.next
  }
  
  return accumulator;
}

const binaryToDecimal = (input) => {
  console.log('binaryToDecimal param ', input);
// simple case 1101
if (input.length > 30) return -1;
if (Number.isNaN(Number(input))) return -1;
const maxExp = input.length - 1;
// console.log('maxExp ', maxExp);
let sum = 0; 

for(let i = 0; i <= maxExp; i++) {
   if (input[i] < 0 || input[i] > 1){
  console.log(input, ' has digit greater than 1 or less than 0');
  return -1
  }

  if (Number(input[i]) === 1) {
    let position = Math.abs(maxExp-i);
    sum+= (2**position);
    console.log(`2**${position} -> sum now -> ${sum}`);
  }
}

return sum;
}


// const LinkedList = require('../skillsoftDsaWithJSAspireJourney/linkedList');

// function getDecimalValue(list) {
//   let currentNode = list.head;
//   let str = '';
  
//   while (currentNode !== null) {
//     //concatenate elements of linked list
//       str += currentNode?.data;
//       currentNode = currentNode?.getNextNode();
//   }
//   return binaryToDecimal(str);  
// };

// const binaryToDecimal = (input) => {
//   console.log('binaryToDecimal param ', input);
// // simple case 1101
// if (input.length > 30) return -1;
// if (Number.isNaN(Number(input))) return -1;
// const maxExp = input.length - 1;
// // console.log('maxExp ', maxExp);
// let sum = 0; 

// for(let i = 0; i <= maxExp; i++) {
//    if (input[i] < 0 || input[i] > 1){
//   console.log(input, ' has digit greater than 1 or less than 0');
//   return -1
//   }

//   if (Number(input[i]) === 1) {
//     let position = Math.abs(maxExp-i);
//     sum+= (2**position);
//     console.log(`2**${position} -> sum now -> ${sum}`);
//   }
// }

// return sum;
// }

// const listOne = new LinkedList();
// //1101 13
// listOne.addToTail('1');
// listOne.addToTail('1');
// listOne.addToTail('0');
// listOne.addToTail('1');


// const listTwo = new LinkedList();
// // 11081 -1
// listTwo.addToTail('1');
// listTwo.addToTail('1');
// listTwo.addToTail('0');
// listTwo.addToTail('8');
// listTwo.addToTail('1');


// const listThree = new LinkedList();
// // 1 1
// listThree.addToTail('1');

// const listFour = new LinkedList();
// // 11 3
// listFour.addToTail('1');
// listFour.addToTail('1');


// console.log('1101 -> ', getDecimalValue(listOne))
// console.log('11081 -> ', getDecimalValue(listTwo));

// console.log('1 -> ', getDecimalValue(listThree));
// console.log('11 -> ', getDecimalValue(listFour));
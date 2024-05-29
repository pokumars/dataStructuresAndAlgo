/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head)return null
    let length = 1; // will know length at end
    let endCounter= 1
    let slow = head;
    let fast = head;

    while (fast.next) {
        fast = fast.next;
        length++;
    };
    k=k % length

    if(k=== 0) return head;

    while(endCounter <length- k){
        slow = slow.next;
        endCounter++
    };

    const newHead = slow.next

    slow.next = null
    fast.next= head
    head= slow.next

    return newHead
};

/*
run thru to find length
do modulo to get effective rotation
    if len= 3 and k = 4; then k%3 means only 1 effective rotation
2nd run to (length-1) pos and that becomes new tail

Alternative
make it run through the number of rotations and wherever it stops,
 you make that the new end and rearrange the other parts

*/

/* const endPointer


a pointer goes all the way to the end minus 1
 take end value set its next to the current head and setit as new head
 nullify endPointer's next
 
 at this point endpointer is in the position of the last pointer
 

- k places can be longer then the length of the linked list. 
so we find the effective amount to rotate by doing length % k.
- 2 pointers go to the end and then one is end minus k.
- nullify the new end after the rotation
set the orig linkedlist end's next to the current head
set the first element of the displaced part as the new head

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // if head is the one to be deleted 
    if(!head.next) return null;
    console.log('head ', head)
    // find nth node
    let counter = 0;
    let tailFinder = head;
    let victim = null;
    let victimPrevious = null; //the previous element of victim    


    while(tailFinder){
        //console.log('tailFinder -> ', tailFinder.val);
        tailFinder = tailFinder.next;
        
        if (counter>=n){
            if(!victim) {
                victim = head;
            }

            //console.log('victim -> ', victim.val);
            victim=victim.next;

            // this style makes it trail victim by 1
            victimPrevious = victimPrevious===null? head: victimPrevious.next;
        }

        console.log('tf ', tailFinder, 'v ', victim, 'vP ', victimPrevious, 'counter ', counter)

        counter++;
    }

    if (victimPrevious) {
        // delete by losing the connection to victim
        victimPrevious.next = victim.next;
    } else {
        console.log('victim ', victim)
        console.log('tailFinder ', tailFinder)
        console.log('counter ', counter)

        return victim.next
    }

    /*  victimPrevious is null meaning the victimPrevious didnt even start iterating yet.
        (It only starts iterating the 2nd time around since the 1st time it is set to head)
        This could be because the first element is what is being deleted
    */

    
    return head
};

// simple case
// head to be deleted

// tail to be deleted -> prev.next = victim.next -> already tackeld in simple case

// [1, 2] 1
// [1, 2] 2
const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }



  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

  /**
   * @param {*} victim The victim of the deletion. the data of the thing to delete
   * @returns 
   */
  removeSpecificElement(victim) {
    // empty LL
    if (this.head === null) return -1
    // if it is head
    if (this.head === victim) {
      this.removeHead();
    }

    let currentNode = this.head;
    // find and delete         
    while (currentNode.getNextNode()) {
      console.log('in while loop', currentNode.data);
      if (victim === currentNode.getNextNode().data) {
        const foundVictim = currentNode.getNextNode();
        const afterVictim = foundVictim.getNextNode();

        // make prev's new next to point to victim's next
        currentNode.setNextNode(afterVictim);
        foundVictim.setNextNode(null);

        console.log(foundVictim);
        return foundVictim;
      }

      currentNode = currentNode.getNextNode();
    }

    // nothing was found
    if (currentNode.getNextNode() === null) {
      console.log('nothing was found')
      return -1
    }
  }

}

const nthLastNode = (linkedList, n) => {
  let tailMarker = linkedList.head;
  let endChaser = null;
  let count = 0;

  while(tailMarker){
    
    if (count >= n) {
      if(endChaser === null) {
        // start off the endchaser from the head position
        endChaser = linkedList.head
      }

      endChaser = endChaser.next
    };
    tailMarker = tailMarker.next;
    // console.log(count);
    count++
  }

  return endChaser;
};
module.exports = LinkedList;


const listOne = new LinkedList();
listOne.addToHead('added first');
listOne.addToTail('added second');
listOne.addToTail('added third');
listOne.addToTail('added fourth');

console.log('head - ', listOne.head.data);

console.log('nth last -> ', nthLastNode(listOne, 2))

// const seasons = new LinkedList();
// seasons.printList();

// seasons.addToHead('summer');
// seasons.addToHead('spring');
// seasons.printList();

// seasons.addToTail('fall');
// seasons.addToTail('winter');
// seasons.printList();

// seasons.removeHead();
// seasons.printList();

// seasons.removeSpecificElement('fall');
// seasons.removeSpecificElement('fallow');
// seasons.printList();

// const emptyList = new LinkedList();
// emptyList.printList();
// emptyList.removeSpecificElement('fallow')
// emptyList.printList();
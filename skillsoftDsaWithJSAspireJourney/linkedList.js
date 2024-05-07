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
    let tail =this.head;
    if(!tail) {
      //Means that tail & head have no value so they dont exist. So the thing  we are adding is actually the head and tail.
      this.head=new Node(data);
    } else {
      while(tail.getNextNode()){
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data))
    }

  }


}

module.exports = LinkedList;
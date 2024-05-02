class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(next) {
      this.next = next;
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am instance 2 of a Node!');
  firstNode.setNextNode(secondNode);
  
  console.log(firstNode);
  
  module.exports = Node;
  
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

// var strawberryNode = new Node('Berry Tasty');
// var vanillaNode = new Node('Vanilla');
// var coconutNode = new Node('Coconuts for Coconut');

// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode);

// let currentNode = vanillaNode;

//  while (currentNode !== null) {
//   console.log(currentNode.data);

//   currentNode= currentNode.next
//  }


module.exports = Node;
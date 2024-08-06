class TreeNode {
    constructor (data){
        this.data= data;
        this.children = [];
    }

    addChild(child){
        if (child instanceof TreeNode ) {
            this.children.push(child);
        } else {
            const newChild = new TreeNode(child);
            this.children.push(newChild);
        }
    }

    removeChild(childToRemove){
        //compare the length of the original children array with the updated children array that has been filtered to determine if any child was deleted. If not then recursively go down and
        const length = this.children.length;

        this.children = this.children.filter((child) => {
            if (childToRemove instanceof TreeNode) {
                return childToRemove !== child
            } else {
                return childToRemove !== child.data;
            }
        });
        
        if (length=== this.children.length) {
            this.children.forEach((c) => c.removeChild(childToRemove))
        }
    }
    print(level = 0) {
        // print's code was given in the course
        let result = '';
        for (let i = 0; i < level; i++) {
          result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }

    depthFirstTraversal(){
        console.log(this.data);
        this.children.forEach(c => c.depthFirstTraversal())
    }

    breadthFirstTraversal(){
        // queue creates a queue with the starting point
        let queue = [ this ];
        while(queue.length > 0) {
          const current = queue.shift();
          console.log(current.data);
          queue = queue.concat(current.children)

        }
        // with a tree like this 
        // 15
        // -- 17
        // -- -- 14
        // -- -- 1
        // -- 18
        // -- -- 8
        // -- -- 1
        // -- 0
        // -- -- 4
        // -- -- 6

        // queue [15]
        // --- while loop
        // current = 15 -> shifted []
        // concat [17, 18, 0]
        // --------------------next iteration
        // current = 17 -> shifted [18, 0]
        // concat [18, 0, 14, 1]
        // --------------------next iteration
        // current = 18 -> shifted [0, 14, 1]
        // concat [0, 14, 1, 8, 1]
        // --------------------next iteration
        // current = 0 -> shifted [14, 1, 8, 1]
        // concat [14, 1, 8, 1, 4, 6]
        // --------------------next iteration
        // current = 14 -> shifted [ 1, 8, 1, 4, 6]
        // concat [1, 8, 1, 4, 6]
        // --------------------next iteration
        // current = 1 -> shifted [8, 1, 4, 6]
        // concat [8, 1, 4, 6]

        // ... since the rest dont have children, queue keeps getting smaller until it ends

    }
};
module.exports = TreeNode;

// exercise 1 script
// const tree = new TreeNode(1);

// tree.addChild(15);
// const node = new TreeNode(30);
// tree.addChild(node);

// console.log(tree);

// tree.removeChild(15);
// console.log(tree);

// tree.removeChild(node);
// console.log(tree);

/* 
exercise 2 script - generate tree and pretty print

const tree2 = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree2.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree2.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree2.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
tree2.print(); */

/* 
const tree3 = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree3.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree3.children[i].addChild(randomize());
  }
}

tree3.print()
tree3.depthFirstTraversal() */


/* 
const tree4 = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree4.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree4.children[i].addChild(randomize());
  }
}

tree4.print();
tree4.breadthFirstTraversal(); */



const menu = new TreeNode('Menu');

const entries = {
  'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
  'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
  'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
};

const meals = Object.keys(entries);
for (let meal=0; meal < meals.length; meal++){
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach( entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();

menu.children[0].removeChild('BBQ Chicken');
menu.children[2].removeChild('Yogurt');

menu.children[2].addChild('BBQ Chicken');
menu.children[0].addChild('Yogurt');


console.log('------- Corrected Menu');
menu.print();

menu.depthFirstTraversal();

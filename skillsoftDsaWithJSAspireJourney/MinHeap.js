class MinHeap  {
    constructor () {
        this.heap = [null];
        this.size = 0;
    }


    heapify() {
        let current = 1;
        let leftChild = getLeftChild(current);
        let rightChild = getRightChild(current);
    
        while (this.canSwap(current, leftChild, rightChild)) {
            // at least one out of place child that reuires a swap with parent
          if (this.exists(leftChild) && this.exists(rightChild)) {
            // both children exist - find which to swap with
            if (this.heap[leftChild] < this.heap[rightChild]) {
              this.swap(current, leftChild);
              current = leftChild;
            } else {
              this.swap(current, rightChild);
              current = rightChild;
            }        
          } else {
            // only one child exists - swap with that
            this.swap(current, leftChild);
            current = leftChild;
          }
          leftChild = getLeftChild(current);
          rightChild = getRightChild(current);
        }
    }

    popMin() {
        if (this.size === 0) {
          return null;
        }
        
        console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        console.log(`.. Removed ${min} from heap`);
        console.log('..',this.heap);
        this.heapify();

        return min;
        
      }

    add(value){
        //check if it meets the requirements
        this.heap.push(value);
        console.log(`Add ${value}. Current state ${this.heap}`)
        this.size++;
        this.bubbleUp();
    }

    bubbleUp(){
        /** current index */
        let current = this.size;
        while(current > 1 && this.heap[current] < this.heap[getParent(current)]){
            console.log(`About to swap  ${this.heap[current] } ${this.heap[getParent(current)]} in a bubble up. \nHeap before swap ${this.heap}`)
            this.swap(current, getParent(current))
            current = getParent(current);
        }
    }
    exists(index) {
        return index <= this.size;
    }
    
    /** either a left or right child exists and is bigger than the child and thus should be swapped */
    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
            || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }

    swap(a, b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] ;
    }

}

const getParent = current => Math.floor(current/2);
const getLeftChild = current => current*2
const getRightChild = current => (current * 2)+1

/* // instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap.heap); */

/* 
// test popMin
const minHeap2 = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap2 with random numbers
for (let i=0; i < 6; i++) {
  minHeap2.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap2.heap);

// remove the minimum value from heap
minHeap2.popMin();

 */


// test heapify

// instantiate a MinHeap class
const minHeap3 = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap3 with random numbers
for (let i=0; i < 6; i++) {
  minHeap3.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap3.heap);

// remove the minimum value from heap
for (let i=0; i < 6; i++) {
  minHeap3.popMin();
  console.log('Heapified', minHeap3.heap);
}
class MinHeap  {
    constructor () {
        this.heap = [null];
        this.size = 0;
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

    swap(a, b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] ;
    }
}

const getParent = current => Math.floor(current/2);
const getLeftChild = current => current*2
const getRightChild = current => (current * 2)+1

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap.heap);


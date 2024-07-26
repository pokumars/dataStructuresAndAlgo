const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
        .fill(null)
        .map(() => new LinkedList());
    }
  
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            // The hashCode += allows the hashing function to avoid generating duplicate hashCodes
            // if keys have the same characters in different orders, such as bat and tab.
            hashCode += hashCode + key.charCodeAt(i);      
        }
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        if (linkedList.head === null) {
          linkedList.addToHead({ key, value });
          return;
        }
        let current= linkedList.head;

        while(current !== null){
            if (current.data.key === key){
                current.data.value = value;
            }
            if(current.getNextNode() === null){
                //it is tail
                const lastNode = new Node({ key, value });
                current.setNextNode(lastNode);
                break;
            }
            current= current.getNextNode()
        }
        
    }

retrieve (key){
        const arrayIndex =  this.hash(key);
        let current = this.hashmap[arrayIndex].head;

        while(current !== null){
          if(current.data.key === key){
            return current.data.value;
          }


          current = current.getNextNode();
        }

        
        return null
    }
  
}

// // test the retrieve function 
// const glossary = new  HashMap(3);
// glossary.assign('semordnilap', 'Words that form different words when reversed');
// console.log(glossary.retrieve('semordnilap'))

// // test the assign function 
// const employees = new HashMap(3);
// employees.assign('34-567', 'Mara');
// console.log(employees.hashmap)

const birdCensus =  new HashMap(16);
birdCensus.assign('mandarin duck','Central Park Pond');
birdCensus.assign('monk parakeet','Brooklyn College');
birdCensus.assign('horned owl','Pelham Bay Park');





module.exports = HashMap;
  
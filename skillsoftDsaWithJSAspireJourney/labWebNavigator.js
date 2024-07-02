const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages  = new Stack();

let currentPage = 'https://duckduckgo.com';
// ------------------------------
// Helper Functions
// ------------------------------

const showCurrentPage = (action) => {
  console.log(`\n${action}`);
//   console.log(`Current page = ${currentPage}`);
//   console.log('Back page = ', backPages.peek());
//   console.log('Next page = ', nextPages.peek());
  console.log(`prev curr next`)
  console.log(`${backPages.peek()} > [${currentPage}] > ${nextPages.peek()} `)
}

const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
    nextPages.pop();
  }

  showCurrentPage('NEW: ')
}

const backPage = () => {
    nextPages.push(currentPage);
    currentPage = backPages.pop();

    showCurrentPage('BACK: ')
}

const nextPage = () => {
    backPages.push(currentPage);
    currentPage = nextPages.pop();

    showCurrentPage('NEXT: ')
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

let finish = false;
let showBack = false, showNext = false;
showCurrentPage('DEFAULT: ');

const response = prompt('How are you today?');

while(finish === false) {
    let instructions = baseInfo;
    if (!backPages.isEmpty()){
        instructions = instructions + ', ' + backInfo;
        showBack = true;
    } else {
        showBack = false; 
    }

    if (!nextPages.isEmpty()){
        instructions = instructions + ', ' +nextInfo;
        showNext = true;
    } else {
        showNext = false; 
    }

    instructions = instructions + ', ' + quitInfo;
    console.log(instructions);

    instructions + ', ' 

    const answer = prompt(question);
    const lowerCaseAnswer = answer.toLowerCase();

    if (!['b', 'n', 'q'].includes(lowerCaseAnswer)) {
        // account for non sttring
        newPage(lowerCaseAnswer);
    } else if (lowerCaseAnswer === 'q') {
        finish= true;        
    } else if (lowerCaseAnswer === 'n') {
        if(showNext){
            nextPage();
        }else {
            console.log(' there is no next page to navigate to')
        }
        
    } else if (lowerCaseAnswer === 'b') {
        if(showBack){
            backPage();
        }else {
            console.log(' there is no previous page to navigate to')
        }
    }

}

  // ------------------------------
  // User Interface Part 2
  // ------------------------------



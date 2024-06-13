
const newMaths = (expression) => {
    const input = expression.split(" "); // [+, 3, 4]
    // console.log('input ', input);
    const stack = [];

    for (let i = input.length-1; i >= 0; i--) {
        let elem = input[i];
        if (!isNaN(parseInt(elem))) {
            // console.log('number encountered ', parseInt(elem))
            stack.push(parseInt(elem));
        } else {
            const a = stack.pop();
            const b = stack.pop();

            switch (elem) {
                case '+':
                    stack.push(a+b);
                    break;
                case '-':
                    stack.push(a-b);
                    break;
                case '*':
                    stack.push(a*b);
                    break;
                case '/':
                    stack.push(a/b);
                    break;
                default:
                    break;
            }
        }
    }
    // console.log('stack ', stack)
    return stack.pop();
}

console.log(newMaths("+ 3 4")); // 7
console.log(newMaths("- 3 * 4 5")); // -17
console.log(newMaths("* + 3 4 5")); // 35
console.log(newMaths("/ - 3 4 + 5 2")); // -1/7
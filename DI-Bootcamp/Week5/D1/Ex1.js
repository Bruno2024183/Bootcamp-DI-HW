// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne the funcOne function ${a}`)};        
}


// #1.1 - run in the console:
funcOne()
// Prediction: The alert will show "inside the funcOne function 3".isinstance
// Explanation: The variable `a` is initialized with 5. Since `5 > 1` is true, the code inside the `if` block will execute, changing the value of `a` to 3.



// #2
let a = 0;
function funThree() {
    alert(`inside the funcThree function ${a}`);
}


// #2.1 - run in the console:
funcThree() // Prediction: The alert will show "inside the funcThree function 0".
funcTwo() // Prediction: This will change the global variable `a` to 5.
funcThree() // Prediction: The alert will show "inside the funcThree function 5".
// Explanation: The first `funcThree` call shows `a` as 0. Then `functwo` sets `a` to 5. The second `funcThree` call reflects this change.


// #2.2 What will happen if the variable is declared with const instead of let?
// Predictions: If `a` is declared with `const`, a typeError will be thrown when `funcTwo` attempts to reassign it.
// Explanation: `const` variables cannot be reassigned once they are initialized.


// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // Prediction: This will assign "hello" to the global variable `a`.
funcFIve() // Prediction: The alert will show "inside the funcFive function hello".
// Explanation: `funcFour` sets the global variable `a` to "hello". `funcFive` then alerts the value of `a`, which is now "hello".


// #4.1 - run in the console:
funcSix() // Prediction: The alert will show "inside the funcSix function test".
// Explanation: The `a` inside `funcSix` is a local variable, so it shadows the global `a`. I has the value "test" within this function.


// #4.2 What will happen if the variable is declared with const instead of let ?
// Prediction: THe behavior wil be the same; the alert will stil show "inside the funcSix function test".
// Explanation: The `const` declaration would work the same as 'let' in this context since no reassignment occurs within `funcSix`.


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
    
// #5.1 - run the code in the console
// Prediction: The first alert will show "in the if block 5". The second alert will show "outside of the if block 2".
// Explanation: The `let` inside the `if` block creates a new block-scopred variable `a`, which is separated from the outer `a`. The outer `a` remains unchanged at 2.


// #5.2 What will happen if the variable is declared with const instead of let ?
// Prediction: The behaviour will be the same; the first alert will show "in the if block 5", and the second alert will show "outside of the if block 2".
// Explanation: The block-scopred nature of `const` is similar to `let`. Since the inner `a` is not reassigned, `const` works the same way as `let` in this context.


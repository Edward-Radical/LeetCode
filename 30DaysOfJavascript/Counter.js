/**
 * 2620. Counter
 * 
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentNumber = n - 1;
    
    return function() {
        currentNumber += 1;
        console.log(currentNumber);
    };
};

const counter = createCounter(15);
counter();
counter();
counter();
counter();
counter();
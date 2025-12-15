/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) {
        return n;
    }

    const oneBack = fib(n - 1);
    const twoBack = fib(n - 2);

    return oneBack + twoBack;
};

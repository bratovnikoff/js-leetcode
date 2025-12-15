/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memoizedCalls = {};

    return function (...args) {
        const id = args.toString();

        if (memoizedCalls[id] === undefined) {
            memoizedCalls[id] = fn(...args);
        }

        return memoizedCalls[id];
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

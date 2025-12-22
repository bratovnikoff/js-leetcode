/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const memoized = new Map();

  return function (...args) {
    let currentMap = memoized;

    for (let i = 0; i < args.length; i++) {
      if (!currentMap.has(args[i])) currentMap.set(args[i], new Map());

      currentMap = currentMap.get(args[i]);
    }

    if (!currentMap.has("fn")) currentMap.set("fn", fn(...args));

    return currentMap.get("fn");
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

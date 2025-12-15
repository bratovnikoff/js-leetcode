/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const obj = {};

    for (const element of this) {
        const res = fn(element);
        if (!Object.hasOwn(obj, res)) {
            obj[res] = [];
        }

        obj[res].push(element);
    }

    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

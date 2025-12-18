/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;

    const flatArr = [];

    let hasSubArrays = false;
    for (const element of arr) {
        if (!Array.isArray(element)) {
            flatArr.push(element);
            continue;
        }

        if (element.length === 0) continue;
        console.log(element);

        flatArr.push(...element);
        hasSubArrays = true;
    }

    if (!hasSubArrays) return flatArr;

    return flat(flatArr, n - 1);
};

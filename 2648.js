/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let prev = 0;
  let current = 1;
  for (let i = 0; i < Infinity; i++) {
    yield prev;
    let tmp = current;
    current += prev;
    prev = tmp;
  }

  return prev;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

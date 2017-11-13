// For shims, hacks, anything else temporary to make things work.
// Can probs be reused for tests

import * as math from 'mathjs';

export function makeRandomField(size : [number, number]){
  //return math.ones(size[0], size[1]);
  return math.ones(size[0], size[1]).map((val) => {
    return val * Math.random();
  });
}

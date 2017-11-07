import * as math from 'mathjs';

export function makeRandomField(size : [number, number]){
  //return math.ones(size[0], size[1]);
  return math.ones(100, 100).map((val) => {
    return val * Math.random();
  });
}

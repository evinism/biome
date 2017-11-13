import * as math from 'mathjs';

// region => value
const model = region => {
  return (
    region.subset(math.index(0, 0)) + region.subset(math.index(2, 2))
  ) / 2;
};



export function tick(env, seed = Math.random()) {
  const field = env;
  const regionBorder = 1;
  const fieldSize = field.size();
  let paddedField = math.matrix(math.zeros(
    fieldSize.map(dim => dim + regionBorder * 2)
  ));
  paddedField = paddedField.subset(
    math.index(...fieldSize.map(dim => math.range(regionBorder, regionBorder + dim))),
    field
  );
  return field.map((val, idx, matrix) => {
    const regionIndex = idx.map(i => math.range(i, i + regionBorder * 2 + 1));
    const region = paddedField.subset(math.index(...regionIndex));
    return model(region);
  });
}

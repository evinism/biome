import React from 'react';

// 0 to 1 range
const valToHex = (val) => {
  const mapToLetter = toClamp =>
    Math.round(Math.min(Math.max(toClamp * 16, 0), 15)).toString(16);

  const r = mapToLetter(val);
  const g = mapToLetter((val - 0.6) / 0.4);
  const b = mapToLetter((val - 0.9) / 0.1);
  return `#${r}${g}${b}`;
}

const VecDisplay = ({field}) => {
  const size = field.size();
  const pixWidth = 100/size[0];
  const pixHeight = 100/size[0];
  return (
    <div className="vector-display">
      { field.valueOf().map(inner => (
        <div>
          { inner.map( value => (
            <div style={{
              width: pixWidth + '%',
              height: pixHeight + '%',
              backgroundColor: valToHex(value),
              display: 'inline-block',
            }} />
          ))}
        </div>
      )) }
    </div>
  );
}

export default VecDisplay;

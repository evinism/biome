import React from 'react';
import VecDisplay from './VecDisplay';
import { makeRandomField } from '../engine/util';

const field = makeRandomField();

const App = () => (
  <div>
    <h1>yo dawg</h1>
    <VecDisplay field={field} />
  </div>
);

export default App;

import React from 'react';
import { CountProvider } from '~/context';
import Counter from '~/components/counter';
import InputRange from '~/components/input-range';

const App = () => (
  <CountProvider>
    <Counter />
    <InputRange />
  </CountProvider>
);

export default App;

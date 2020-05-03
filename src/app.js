import React from 'react';
import { CountProvider } from '~/context';
import Counter from '~/components/counter';
import InputRange from '~/components/input-range';
import Countdown from '~/components/countdown';

const App = () => (
  <CountProvider>
    <Counter />
    <InputRange />
    <Countdown />
  </CountProvider>
);

export default App;

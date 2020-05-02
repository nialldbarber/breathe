import React from 'react';
import { CountProvider } from '~/context/count';
import Counter from '~/components/counter';

const App = () => (
  <CountProvider>
    <Counter interval={4} minutes={1} />
  </CountProvider>
);

export default App;

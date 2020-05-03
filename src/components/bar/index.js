import React, { useContext } from 'react';
import { CountContext } from '~/context';
import { switchColors } from '~/utils/colors';
import { Container, BarLine } from '~/components/bar/styles';

const Bar = ({ int }) => {
  const { internalCount } = useContext(CountContext);

  return (
    <Container>
      <div id="one" />
      <div id="two" />
      <BarLine style={{ ...switchColors(internalCount) }} transition={int} />
    </Container>
  );
};

export default Bar;

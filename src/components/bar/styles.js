import styled from 'styled-components';

const colors = ['#2F7BDD', '#7C38ED', '#38ED7C'];

const Container = styled.div`
  position: relative;
  display: grid;
  border: 1px solid #333;

  #one {
    position: absolute;
    height: 100%;
    width: 2px;
    background: #000;
    left: 33.33%;
  }
  #two {
    position: absolute;
    height: 100%;
    width: 2px;
    background: #000;
    left: 66.66%;
  }
`;

const BarLine = styled.div`
  height: 100px;
  transition: width ${({ transition }) => transition}ms ease-in-out;
`;

export { Container, BarLine, colors };

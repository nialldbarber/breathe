import styled from 'styled-components';

const Container = styled.button`
  color: #fff;
  background: #3ecf8e;
  text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  border: 1px solid #3ecf8e;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  margin: 0.3rem;

  &.active {
    color: #3ecf8e;
    border: 1px solid #3ecf8e;
    background: #fff;
  }
`;

export { Container };

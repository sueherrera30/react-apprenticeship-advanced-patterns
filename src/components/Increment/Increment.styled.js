import styled from 'styled-components';

const Increment = styled.button(({ size }) => ({
  fontSize: size === 'large' ? 24 : 16,
  padding: size === 'large' ? '5px 15px' : null,
}));

const Styled = { Increment };

export default Styled;

import React from 'react';
import styled from 'styled-components';

const Button = props => <StyledButton {...props} />;

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Button;

import React, { useState } from 'react';
import styled from 'styled-components';
import FeedbackComponent from './FeedbackComponent /FeedbackComponent ';
// ${props => props.theme.main};

const Button = styled.button`
  background-color: ${(props) => props.bg || 'hsl(240, 56%, 60%)'};
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  position: fixed;
  right: ${(props) => props.right || '1rem'};

  bottom: 1rem;
  border-radius: 8px;

  &:hover {
    color: hsl(240, 56%, 60%);
    background-color: black;
  }
  &:focus {
    outline: none;
  }
`;
const CustomButton = (props) => {
  const [flag, setFlag] = useState(false);
  const { icon } = props;

  const formToggleHandler = () => {
    setFlag((s) => !s);
  };

  return (
    <>
      {flag ? <FeedbackComponent /> : null}
      <Button onClick={formToggleHandler} bg={props.bg} right={props.right}>
        {icon}
      </Button>
    </>
  );
};
export default CustomButton;

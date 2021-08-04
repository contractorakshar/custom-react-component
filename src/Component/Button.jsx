import React, { useState } from 'react';
import styled from 'styled-components';
import FeedbackComponent from './FeedbackComponent /FeedbackComponent ';
// ${props => props.theme.main};

const Button = styled.button`
  background-color: ${(props) => props.bg || 'hsl(240, 56%, 60%)'};
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  position: fixed;
  right: 1rem;

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
  const { icon, ...otherProps } = props;

  const formToggleHandler = () => {
    if (props.disableWidget) {
      alert('Sorry Service is currently unavailable');
    } else {
      setFlag((s) => !s);
    }
  };

  return (
    <>
      {flag ? <FeedbackComponent {...otherProps} /> : null}
      <Button onClick={formToggleHandler} bg={props.bg}>
        {icon}
      </Button>
    </>
  );
};
export default CustomButton;

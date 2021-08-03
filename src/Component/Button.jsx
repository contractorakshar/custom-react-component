import React, { useState } from 'react';
import styled from 'styled-components';
import FeedbackComponent from './FeedbackComponent /FeedbackComponent ';
const Button = styled.button`
  background-color: hsl(240, 56%, 60%);
  border: none;
  padding: 0.5rem 3rem;
  cursor: pointer;
  font-size: 1.5rem;
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
  const { value } = props;

  const formToggleHandler = () => {
    setFlag((s) => !s);
  };

  return (
    <>
      {flag ? <FeedbackComponent /> : null}
      <Button onClick={formToggleHandler}> {value}</Button>
    </>
  );
};
export default CustomButton;

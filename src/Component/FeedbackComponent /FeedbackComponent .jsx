import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
  width: 25vw;
  right: 1rem;
  min-width: 250px;
  border-radius: 5px;
  bottom: 4.5rem;
  position: fixed;
  padding: 2rem 1rem;
  box-shadow: 0px 5px 5px grey;
  border: 1px solid black;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: paleviol;
  background: lightgray;
  border: none;
  border-radius: 3px;
  &:focus {
    color: black;
  }
`;
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: royalblue;
  border: 2px solid royalblue;
`;

const FeedbackComponent = () => {
  return (
    <>
      <Form>
        <label>Name</label>
        <Input placeholder="Name..." />
        <label>Email</label>
        <Input placeholder="Email" type="email" />
        <label>Rating</label>
        <Input
          type="range"
          min="0"
          max="5"
          onClick={(e) => {
            console.log(e.target.value);
          }}
        />
        <label>Description</label>
        <Input placeholder="Give us your valuable feedback" />
        <Button theme={{ main: 'royalblue' }}>SUBMIT</Button>
      </Form>
    </>
  );
};
export default FeedbackComponent;

import React, { useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 24vw;
  right: 1rem;
  min-width: 250px;
  border-radius: 5px;
  bottom: 4.5rem;
  position: fixed;
  padding: 0.8rem 1rem;
  box-shadow: 0px 5px 5px grey;
  border: 1px solid gray;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid lightgrey;
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
const Label = styled.label`
  margin: 0.5rem 0px;
`;
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: royalblue;
  border: 2px solid royalblue;
`;

const FeedbackComponent = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const ratingRef = useRef('');
  const descRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      ratingRef.current.value,
      descRef.current.value
    );
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <H1>TITLE</H1>
        <Label>Name</Label>
        <Input ref={nameRef} placeholder="Name..." />
        <Label>Email</Label>
        <Input ref={emailRef} placeholder="Email" type="email" />

        <Label>Description</Label>
        <Input ref={descRef} placeholder="Give us your valuable feedback" />
        <Label>Rating</Label>
        <Input ref={ratingRef} type="range" min="0" max="5" />
        <Button type="submit">SUBMIT</Button>
      </Form>
    </>
  );
};
export default FeedbackComponent;

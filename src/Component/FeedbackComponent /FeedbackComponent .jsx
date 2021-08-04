import React, { useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: ${(props) => props.bgContainer || 'hsl(240, 56%, 60%)'};
  width: 22vw;
  margin: 0.8rem 0;
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
const Label = styled.label`
  margin: 0.4rem 0;
`;
const Div = styled.div`
  display: block;
  animation: fadein 1s forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;

  background-color: ${(props) => props.bgFeilds || 'lightgray'};
  border: none;
  border-radius: 3px;
  &:focus {
    color: black;
  }
`;
const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  background-color: ${(props) => props.bgFeilds || 'lightgray'};
  border: none;
  border-radius: 3px;
  &:focus {
    color: black;
  }
`;
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: royalblue;
  border: 2px solid royalblue;
`;
const MinimizeButton = styled.button`
  cursor: pointer;
  z-index: 1;
  background: lightgrey;
  border: none;
  padding: 0.4rem 0.6rem;
  fontsize: 1.5rem;
  color: red;
  right: 1.1rem;
  border-radius: 5px;
  right: 1rem;
  bottom: 30.5rem;
  position: fixed;
`;
const FeedbackComponent = (props) => {
  console.log(props);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const ratingRef = useRef('');
  const descRef = useRef('');

  const minimizeHandler = () => {
    document.getElementById('minimize').style.display = 'none';
  };

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
      <Div id="minimize">
        <MinimizeButton onClick={minimizeHandler}>-</MinimizeButton>
        <Form onSubmit={submitHandler} bgContainer={props.bgContainer}>
          <H1>TITLE</H1>
          {props.name && (
            <>
              <Label>Name</Label>
              <Input
                ref={nameRef}
                placeholder="Name..."
                bgFeilds={props.bgFeilds}
              />
            </>
          )}
          {props.email && (
            <>
              {' '}
              <Label>Email</Label>
              <Input
                bgFeilds={props.bgFeilds}
                ref={emailRef}
                placeholder="Email"
                type="email"
              />{' '}
            </>
          )}
          {props.desc && (
            <>
              {' '}
              <Label>Description</Label>
              <TextArea
                bgFeilds={props.bgFeilds}
                rows="4"
                cols="40"
                ref={descRef}
                placeholder="Give us your valuable feedback"
              />{' '}
            </>
          )}
          {props.rating && (
            <>
              <Label>Rating</Label>
              <Input
                ref={ratingRef}
                bgFeilds={props.bgFeilds}
                type="range"
                min="0"
                max="5"
              />
            </>
          )}

          <Button type="submit">SUBMIT</Button>
        </Form>
      </Div>
    </>
  );
};
export default FeedbackComponent;

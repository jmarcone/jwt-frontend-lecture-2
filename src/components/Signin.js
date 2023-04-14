import React, { useRef } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import useAuth from "../hooks/useAuth";

export default function Signin() {
  const { loading, error, signInUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInUser(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} error={!!error} loading={loading}>
        <h2>Sign in</h2>
        <Form.Field>
          <label>Email</label>
          <input
            name='email'
            type='email'
            required
            placeholder='Please provide your email!'
            ref={emailRef}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name='password'
            type='password'
            required
            placeholder='Please provide your password!'
            ref={passwordRef}
          />
        </Form.Field>

        <Button type='submit'>Log in</Button>

        <Message error header={error} />
      </Form>
    </>
  );
}

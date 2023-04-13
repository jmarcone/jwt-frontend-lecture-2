import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { loading, error, signUpUser } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signUpUser(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }

    return (
        <>
            <Form onSubmit={handleSubmit} error={!!error} loading={loading}>
                <h2>Sign up</h2>
                <Form.Field>
                    <label>Name</label>
                    <input name='name' required placeholder="Please provide your name!" ref={nameRef} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input name='email' type="email" required placeholder="Please provide your email!" ref={emailRef} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name='password' type="password" required placeholder="Please provide your password!" ref={passwordRef} />
                </Form.Field>

                <Button type="submit">Sign up!</Button>

                <Message
                    error
                    header={error}
                />
            </Form>
        </>
    )
}
import React from 'react';
import axios from "axios";
import axiosInstance, { setAccessToken } from "../../api/axiosInstance";
import UserValidate from "./UserValidate";
import { Container, Form, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SignUpForm({setUser}) {

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert("Missing required fields");
    }
    const { isValid, error } = UserValidate.validateSignUp(formData);
    if (!isValid) return alert(error);
    axiosInstance.post("/auth/signup", formData).then((res) => {
      setUser({ status: "logged", data: res.data.user });
      setAccessToken(res.data.accessToken);
    });
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg rounded-4 p-4"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="text-center mb-4">Регистрация</h2>
        <Form onSubmit={signUpHandler}>     
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="name"
              type="text"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="email"
              type="email"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="password"
              type="password"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-lg">Repeat Password</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="repeatPassword"
              type="password"
            />
          </InputGroup>
          <br />
          <Button type="submit"> Подтвердить</Button>
        </Form>
      </Card>
    </Container>
  );
}

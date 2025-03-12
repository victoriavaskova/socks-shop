import React from 'react';
import axios from "axios";
import axiosInstance, { setAccessToken } from "../../api/axiosInstance";
import UserValidate from "./UserValidate";
import { Container, Form, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUpForm.css'; // Подключаем стили

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
        className="shadow-lg rounded-4 p-4 sign-up-card"
        style={{ maxWidth: '400px', width: '100%' }}
        >
        <h2 className="text-center mb-4">Регистрация</h2>
        <Form onSubmit={signUpHandler}>
          <div className="form-group">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Имя</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                name="name"
                type="text"
              />
            </InputGroup>
          </div>

          <div className="form-group">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="email"
                type="email"
              />
            </InputGroup>
          </div>

          <div className="form-group">
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-lg">Пароль</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="password"
                type="password"
              />
            </InputGroup>
          </div>

          <div className="form-group">
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-lg">Еще раз</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="repeatPassword"
                type="password"
              />
            </InputGroup>
          </div>

          <div className="form-group text-center mt-4">
            <Button className="btn-submit" type="submit">
              Подтвердить
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}


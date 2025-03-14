import React, { useState } from 'react';
import axiosInstance, { setAccessToken } from '../../api/axiosInstance';
import { useNavigate } from 'react-router';


import { Container, Form, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
  setErrorMessage('');
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return setErrorMessage('Заполните все поля');
    }
    axiosInstance.post('/auth/login', formData).then((res) => {
      setUser({ status: 'logged', data: res.data.user });
      setAccessToken(res.data.accessToken);
      navigate('/createsocks')
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Неверный email или пароль');
      } else {
        setErrorMessage('Ошибка сервера, попробуйте позже');
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg rounded-4 p-4 login-card"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="text-center mb-4">Войти</h2>
        <Form onSubmit={loginHandler}>
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
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Пароль</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="password"
                type="password"
              />
            </InputGroup>
          </div>

          <div className="form-group text-center mt-4">
            <Button className="btn-submit" type="submit">
              Подтвердить
            </Button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Form>
      </Card>
    </Container>
  );
}

import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

import InputGroup from 'react-bootstrap/InputGroup';
import './LoginForm.css'; // Подключаем стили

export default function LoginForm() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg rounded-4 p-4 login-card"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="text-center mb-4">Войти</h2>
        <Form>
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
        </Form>
      </Card>
    </Container>
  );
}
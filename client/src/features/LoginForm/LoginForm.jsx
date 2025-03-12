import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

return (
    <Form onSubmit={loginHandler}>
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
      <Button type="submit"> Подтвердить</Button>
    </Form>
  );

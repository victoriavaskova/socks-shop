import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

return (
    <>
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
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
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
          <InputGroup.Text id="inputGroup-sizing-lg">
            Repeat Password
          </InputGroup.Text>
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
    </>
  );


export default SignUpForm;
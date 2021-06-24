import React from 'react';
import '../../css/auth.css';

//import components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login({ setUsername, setPassword }) {
    return (
        <Container className="authContainer hidden">
            <Row>
                <Form className="authForm">
                <Form.Group className="authUsernameGroup" >
                        <Form.Control size="lg" type="text" placeholder="Username" className="authUsernameControl" />
                    </Form.Group>
                    <Form.Group className="authPasswordGroup" >
                        <Form.Control size="lg" type="password" placeholder="Password" className="authPasswordControl" />
                    </Form.Group>
                    <Button className="authButton" size="lg" variant="primary" type="submit">Log In</Button>
                    <Form.Text>Forgot your password?</Form.Text>
                </Form>
            </Row>
        </Container>
    )
}

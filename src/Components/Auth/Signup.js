import React from 'react'
import '../../css/auth.css';

//import components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup({ setUserName, setEmail, setPassword}) {
    return (
        <Container className="authContainer">
        <Row>
            <Form className="authForm">
            <Form.Group className="authUsernameGroup" >
                        <Form.Control size="lg" type="text" placeholder="Username" className="authUsernameControl" />
                    </Form.Group>
                <Form.Group controlId="formBasicEmail" className="authEmailGroup" >
                    <Form.Control size="lg" type="email" placeholder="Email" className="authEmailControl" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="authPasswordGroup" >
                    <Form.Control size="lg" type="password" placeholder="Password" className="authPasswordControl" />
                </Form.Group>
                <Button className="authButton" size="lg" variant="primary" type="submit">Sign Up</Button>
            </Form>
        </Row>
    </Container>
    )
}

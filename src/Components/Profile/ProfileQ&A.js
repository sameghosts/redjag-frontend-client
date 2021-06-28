import React from 'react'

//import boostrap tags
import { Container, Row, Button } from 'react-bootstrap';

export default function ProfileQandA() {
    return (
        <div>
            <Container className="editQandAContainer">
                <Row>
                    <Form className="editQandAForm">

                        <Form.Group className="editUsernameGroup" >
                            <p>What positions are you looking for?</p>
                            <Form.Control size="lg" type="text" placeholder="Username" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editFirstnameGroup" >
                            <p>What is your experience level?</p>
                            <Form.Control size="lg" type="text" placeholder="Firstname" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editLastnameGroup" >
                            <p>What is your hard skill set?</p>
                            <Form.Control size="lg" type="text" placeholder="Lastname" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>What is your soft skill set?</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>What is the area of your expertise?</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>Preferred employment type</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>Preferred pay range</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>Preferred company culture</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <p>Other notes</p>
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Button className="" size="lg" variant="primary" type="submit">Save Changes</Button>

                    </Form>
                </Row>
            </Container>
        </div>
    )
}
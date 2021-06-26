import React, {useState, useEffect, useRef } from 'react'

import { 
    Col,
    Row,
    Container,
    Form,
    Button
} from 'react-bootstrap'

export default function TodoForm({ todoArray, todoFormString, setTodoFormString, setTodoArray }) {
    const inputTextHandler = (e) => {
        setTodoFormString(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodoArray([
            ...todoArray, {}
        ])
    }

    return (
        <Container className="todoContainer">
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Create a Todo:
                        </Form.Label>
                        <Form.Control type="text" onChange={inputTextHandler} />
                        <Button>Create</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Update a Todo:
                        </Form.Label>
                        <Form.Control type="text" />
                        <Button>Update</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}

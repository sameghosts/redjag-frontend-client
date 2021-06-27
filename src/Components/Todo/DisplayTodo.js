import React, { useState } from 'react'

import {
    Container,
    Col,
    Row,
    Button,
    Form
} from 'react-bootstrap'

function DisplayTodo({ displayTodo }) {
    const [todoText, setTodoText] = useState('');
    const [todoComplete, setTodoComplete] = useState(false)
    const [todoDueDate, setTodoDueDate] = useState('')
    console.log(displayTodo, "$$$$$$$$$$")
    console.log(todoText, todoComplete, todoDueDate, "ready to edit")

    const textChange = (e) => {
        console.log('type')
        setTodoText(e.target.value);
    };

    const updateTodo = (e) => {
        e.preventDefault();
        console.log('click')
        displayTodo.text = todoText;
        displayTodo.Complete = todoComplete;
        console.log(displayTodo)
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        {displayTodo.text}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Completed</Form.Label>
                        <Form.Check value={true} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date Due</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes</Form.Label>  
                        <Form.Control as="textarea" onChange={textChange} />
                    </Form.Group>
                    <Button onClick={updateTodo}>Update</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default DisplayTodo

import React from 'react'

import ArrayTodo from './ArrayTodo';
import EmptyTodo from './EmptyTodo';

import {
    Card,
    Container,
    Button
} from 'react-bootstrap';

export default  function Todo({ key, text, todoArray, setTodoArray, todo }) {

    const deleteHandler = () => {
        setTodoArray(todoArray.filter(el => el.id !== todo.id))
    };

    const editHandler = () => {
        console.log('click')
    };



 
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{text}</Card.Title>
                </Card.Body>
                <Button onClick={editHandler}>Edit</Button>
                <Button onClick={deleteHandler}>Delete</Button>
            </Card>
        </Container>
    )
}
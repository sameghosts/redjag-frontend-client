import React from 'react'

import {
    Card
} from 'react-bootstrap';

export default  function Todo({ todoArray }) {
    console.log(todoArray)

    if(todoArray == null) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Start a Todo List</Card.Title>
                </Card.Body>
            </Card>
        )
    } else {
        return todoArray.map((todo, index) => (
            <Card>
                <Card.Body>
                    <Card.Title>{todo.text}</Card.Title>
                </Card.Body>
            </Card>
        ))

    }
}
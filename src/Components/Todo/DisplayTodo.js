import React from 'react'

import {
    Container,
    Col,
    Row
} from 'react-bootstrap'

function DisplayTodo({ displayTodo }) {
    console.log(displayTodo, "$$$$$$$$$$")
    return (
        <Container>
            <Row>
                display todo
            </Row>
        </Container>
    )
}

export default DisplayTodo

import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoList from './TodoList';

import {
    Container,
    Row,
    Col 
} from 'react-bootstrap'

export default function TodoPortal() {
    //set States
    const [todoFormString, setTodoFormString] = useState('');
    const [todoArray, setTodoArray] = useState([]);

    return (
        <Container>
            <h1>This is the top level</h1>
            <Row>
                <Col>
                    <TodoForm 
                        setTodoArray={setTodoArray} 
                        setTodoFormString={setTodoFormString} 
                        todoArray={todoArray}
                        todoFormString={todoFormString}
                    />
                </Col>
                <Col>
                    <TodoList 
                        todoArray={todoArray}
                        setTodoArray={setTodoArray}
                    />
                </Col>
            </Row>
        </Container>
    )
}

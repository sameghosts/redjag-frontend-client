import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import DisplayTodo from './DisplayTodo';
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
    const [displayTodo, setDisplayTodo] = useState({});

    return (
        <Container>
            <h1>This is the top level</h1>
            <Row>
                <Col>
                    <Row>
                        <TodoForm 
                            setTodoArray={setTodoArray} 
                            setTodoFormString={setTodoFormString} 
                            todoArray={todoArray}
                            todoFormString={todoFormString}
                        />
                    </Row>
                    <Row>
                        <DisplayTodo displayTodo={displayTodo} />
                    </Row>
                </Col>
                <Col>
                    <TodoList 
                        todoArray={todoArray}
                        setTodoArray={setTodoArray}
                        setDisplayTodo={setDisplayTodo}
                    />
                </Col>
            </Row>
        </Container>
    )
}

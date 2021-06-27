
import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoArray, setTodoArray, setDisplayTodo }) {

    return (
        <div>
           <h1>Things to do</h1>
           <ul>
                {todoArray.map((todo) => (
                    <Todo 
                        todo={todo}
                        text={todo.text}
                        key={todo.id} 
                        todoArray={todoArray} 
                        setTodoArray={setTodoArray} 
                        setDisplayTodo={setDisplayTodo}
                    />
                ))}
           </ul>
        </div>
    )
}
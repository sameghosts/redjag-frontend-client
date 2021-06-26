import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoArray }) {
    console.log(todoArray)
    return (
        <div>
           <h1>Things to do</h1>
           <Todo todoArray={todoArray} />
        </div>
    )
}

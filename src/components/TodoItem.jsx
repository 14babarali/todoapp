import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);

    return (
        <li>
            {todo.text} 
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Remove</button>
        </li>
    );
}

export default TodoItem;

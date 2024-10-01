import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

function TodoList() {
    const { state } = useContext(TodoContext);
    
    return (
        <ul>
            {state.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;

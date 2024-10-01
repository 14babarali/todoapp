import React, { useState, useContext, useRef } from 'react';
import { TodoContext } from '../App';

function AddTodo() {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const { dispatch } = useContext(TodoContext);

    const handleAddTodo = () => {
        if (text) {
            dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
            setText('');
            inputRef.current.focus(); // Focus the input field after adding
        }
    };

    return (
        <div>
            <input 
                ref={inputRef} 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;

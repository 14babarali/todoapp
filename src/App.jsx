import React, { useReducer, createContext } from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';

// Initial state for the reducer
const initialState = {
    todos: [],
};

// Create context
export const TodoContext = createContext();

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <div className="app">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </TodoContext.Provider>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import TodoList from './todolist';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]); // State for the list of todos
    const [input, setInput] = useState(''); // State for the input field

    // Load todos from local storage when the app starts
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    // Update local storage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault(); // Prevents page refresh
        if (input) {
            setTodos([...todos, input]); // Add the new todo to the list
            setInput(''); // Clear the input field
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index); // Remove the todo at the specified index
        setTodos(newTodos); // Update the state with the new list
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTodo}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <TodoList todos={todos} removeTodo={removeTodo} /> {/* Pass the removeTodo function */}
        </div>
    );
};

export default App;

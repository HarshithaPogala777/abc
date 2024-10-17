import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
    return (
        <div>
            <h2>Your Todo List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button 
                            onClick={() => removeTodo(index)} 
                            style={{ marginLeft: '10px', backgroundColor: '#d9534f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

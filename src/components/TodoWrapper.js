import { useState } from "react";
import TodoList from "./TodoList";
import Todo from './Todo'; 
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = ({ title, message }) => {
        const newTodo = { id: uuidv4(), title, message, completed: false, isEditing: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearAll = () => {
        setTodos([]);
    };

    return (
        <div className="todo-wrapper">
            <TodoList addTodo={addTodo} clearAll={clearAll} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={todo.id} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoWrapper;
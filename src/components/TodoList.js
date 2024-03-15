import { useState } from "react";
import TodoWrapper from "./TodoWrapper";

const TodoList = ({ addTodo, clearAll }) => {
    const [titleValue, setTitleValue] = useState("");
    const [messageValue, setMessageValue] = useState(""); 
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        
        if (titleValue.trim() === "" || messageValue.trim() === "") {
            setError("ჩაწერე რამე ორივე ველში!");
            return;
        }

        addTodo({ title: titleValue, message: messageValue });
        setTitleValue("");
        setMessageValue("");
        setError(""); 
    };

    const handleClear = () => {
      setTitleValue("");
      setMessageValue("");
      setError("");
  };

    return (
        <>
            <form className="todoform" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input-title"
                        value={titleValue}
                        placeholder="Title"
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="todo-input-message"
                        value={messageValue}
                        placeholder="Message"
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                </div>
                <div className="btn">
                    <button type="submit" className="add-button">Add</button>
                    <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </>
    );
};

export default TodoList;
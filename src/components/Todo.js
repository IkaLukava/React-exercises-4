
import { MdDeleteForever } from "react-icons/md";

const Todo = ({ task, deleteTodo }) => {
    return (
        <div className='Todo'>
            <p className="head">{task.title}</p>
            <p className="head1">{task.message}</p>
            <div className="e">
                <MdDeleteForever onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;
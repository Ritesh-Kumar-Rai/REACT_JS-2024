import { useState } from "react";
import { useTodoContext } from "../context";

function TodoForm() {

    const [todoName, setTodoName] = useState('');

    const { dispatch, ACTIONS } = useTodoContext();

    const saveTodo = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { todo: todoName, isCompleted: false }
        });
        setTodoName('');
    };

    return (
        <form onSubmit={saveTodo} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 hover:bg-green-900 active:bg-green-600 duration-300 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
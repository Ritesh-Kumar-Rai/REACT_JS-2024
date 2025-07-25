import { useState } from "react";
import { useTodoContext } from "../context";

function TodoItem({ todoObj }) {

    const [todoMsg, setTodoMsg] = useState(todoObj.todo);
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const { dispatch, ACTIONS } = useTodoContext();

    const toggleCompleted = () => {
        dispatch({
            type: ACTIONS.TOGGLE_COMPLETE,
            payload: todoObj.id
        });
    }

    const editTodo = () => {
        dispatch({
            type: ACTIONS.UPDATE_TODO,
            payload: {
                id: todoObj.id,
                todo_name: todoMsg
            }
        });
        setIsTodoEditable(prev => !prev);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todoObj.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="w-6 h-6 m-auto cursor-pointer"
                checked={todoObj.isCompleted}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todoObj.isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
                onClick={() => {
                    if (todoObj.isCompleted) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoObj.isCompleted}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todoObj.id })}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
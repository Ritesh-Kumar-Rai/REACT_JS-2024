import { useState } from "react";

function TodoEditor({ saveTodo }) {

  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');


  const onTodoChange = (event) => {
    setTodo(event.target.value);
  }

  const onDateChange = (event) => {
    setDate(event.target.value);
  }


  const onAddButton = () => {
    if (todo.length === 0 || date.length === 0) {
      alert("Please type todo and date before saving it!");
      return;
    }
    saveTodo(todo, date);
    setTodo('');
    setDate('');
  };



  return (
    <div className="row">
      <div className="col-6">
        <input type="text" className="form-control fs-4" placeholder="type your todo here..." value={todo} onChange={onTodoChange} />
      </div>
      <div className="col-4">
        <input type="date" className="form-control fs-4" value={date} onChange={onDateChange} />
      </div>
      <div className="col-2">
        <button type="button" onClick={onAddButton} className="btn btn-success m-auto h-100 w-100 fs-4">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoEditor;
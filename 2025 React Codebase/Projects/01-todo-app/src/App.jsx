import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoEditor from "./components/TodoEditor";
import TodoItem from "./components/TodoItem";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  const saveTodo = (todoName, todoDate) => {
    const newTodo = { todo_name: todoName, due_date: todoDate, };
    setTodos([...todos, newTodo]);
    console.log(`New Todo Added named: '${todoName}' with dueDate: '${todoDate}'`);
  };

  const deleteTodo = (todoName) => {

    const filtered_todos = todos.filter(each_todo => each_todo.todo_name !== todoName);
    setTodos(filtered_todos);

    console.error(`todo named '${todoName}' is deleted!`);
  };


  return (
    <>
      <h1>TODO App</h1>
      <div className="container my-4">
        <TodoEditor saveTodo={saveTodo} />
        <div className="container m-0 p-0">
          {todos.length === 0 && <ErrorMessage />}
          {todos.map((todo, index) => <TodoItem key={index} todoName={todo.todo_name} date={todo.due_date} onDeleteBtnClick={() => deleteTodo(todo.todo_name)} />)}
        </div>

      </div>
    </>
  );
}

export default App;

# Best Practices in React JS

## 1. Update State from Previous State

- Every Time when you want to update the state from previous state use functional update method. Let me explain you with an example:

1.  Regular Way to update the State

```javascript
const [todos, setTodos] = useState([]);

const saveTodo = (todoName, dueDate) => {
  const updatedTodo = [
    ...todos,
    { todo_name: todoName, todo_due_date: dueDate },
  ];

  setTodos(updatedTodo);
};
```

This way we generally update the state, this is a good way to update the state but assume if you have large amount of data and the updation will happens from various functions like: if your todos contains 1000s of data and each `data_object` contains multiple information.. and more than 1 functions will be responsible for updation of that state like `deleteTodo`, `updateTodo`, `resetTodo` etc. Then the updation might cause **error** and incorrect data updation due to `React useState() asynchronous behaviour`.

Which will cause, bigger `bugs/error's` in your application to prevent those inconsistent updation always follow the below best practice to update the state from it's `current previous state` not `outdated state`;

2.  Optimised way to update the State

```javascript
const [todos, setTodos] = useState([]);

const saveTodo = (todoName, dueDate) => {
  setTodos((current_todos) => {
    const updatedTodos = [
      ...current_todos,
      { todo_name: todoName, todo_due_date: dueDate },
    ];
    return updatedTodos;
  });
};
```

The above optimised verion, we are going to directly update the state inside the setTodos() method inside it we are declaring anonymous callback function which will access the `current_state` as parameter and then we will update the state from that which leads to consistent data updation and very less chance of `failure` or `errors`.

## 2. How to persist/update state over whole application without Re-rendering the components

- In React, to store data in a variable we will generally prefer and store it to useState() hook which has many advantages and which is also recommended by `React Developers and Team`.

- When we use useState() hook and many updation to it will Trigger React to `Re-render components` which causes to display updated data across the website where it was used to display. But it will also cost at some amount like `multiple re-rendering/re-painting` the DOM components unnecessarily where it was not really needed.

- Let me clarify what i am trying to prove, Assume you have developed the small mini `todo app` where you have two **input tags** where you write 'todo name' and 'due date' and to store those data you have used `useState()` for todo_name and todo_due_date and applied `2 way-binding to input tags for controlled behaviour`.

  My question is, do you really needed to make `input controlled` by using `2 way-binding` because due to useState() every time you type a single letter in a input element will update the state which cause components to **Re-render** each type. Which causes `computation cost and re-painting cost`.

  So, is there any alternate way to store data:

  - Can i use normal javascript variable like what we use on vanilla JS

  ```javascript
  let todoName = "";
  let dueDate = "";

  const onTodoUpdate = (name, date) => {
    todoName = name;
    dueDate = date;
  };

  const submitTodo = () => {
    saveTodo(todoName, dueDate); // a callback function passed by it's parent component which store this todo to todos array
  };
  ```

  Aww, we can use normal js variable but there's a catch; On-every re-rendering of components leads to re-initialize the variable which cause to reset of data.. which is never prefer and bad practice;

  - Best way to store a data in a variable and update that data without triggering components to re-render is `useRef()` hook.
  - The `useRef()` _is like a persistent container that holds a mutable value - it survives re-renders without triggering them_ and the best is you can also use `useRef()` for `DOM manipulations or target the HTML elements`.

  Example:

  ```javascript
  const todoName = useRef();
  const dueDate = useRef();

  const submitTodo = (e) => {
    e.preventDefault();

    const todo_name = todoName.current;
    const todo_date = dueDate.current;
    savetodo(todo_name, todo_date);
  };

  return (
    <form action="#" onSubmit={submitTodo}>
      <input type="text" className="form-control" ref={todoName} />
      <input type="date" className="form-control" ref={dueDate} />

      <button type="submit">Save Todo</button>
    </form>
  );
  ```

  This way we can save component's re-rendering and efficiently persist data. and it will never loss when the components re-rendered..

  - Another example `a counter app`:

  ```javascript
  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  const updateCount = () => {
    setStateCount((prev) => (prev += 1));
    refCount.current += 1;
  };

  useEffect(() => {
    console.log(
      `state count: ${stateCount} and ref count: ${refCount.current}`
    );
  }, [stateCount]);

  return (
    <div className="container">
      <h1>
        State Count: {stateCount} and Ref Count: ${refCount.current}
      </h1>
      <button type="button" onClick={updateCount}>
        Click Me
      </button>
    </div>
  );
  ```

  In the above, you can verify that "`useRef.current` retains it's value between renders, unlike regular variables, making it ideal for tracking mutable values without re-rendering".

## 3 Difference between React.memo() & React.useMemo():

Great question! `React.memo()` and `React.useMemo()` are both optimization tools in React, but they serve different purposes and are used in different contexts.

---

### **React.memo()**

- **Purpose:**  
  It’s a higher-order component (HOC) that wraps a component to prevent unnecessary re-renders when its props haven't changed.

- **Usage:**  
  Wrap a component to memoize it:

  ```jsx
  const MyComponent = React.memo(function MyComponent(props) {
    // component code
  });
  ```

- **When to use:**  
  When you want to optimize a **whole component** and avoid re-rendering it if its props are the same.

- **Behavior:**  
  Performs a shallow comparison of props by default. You can pass a custom comparison function if needed.

---

### **React.useMemo()**

- **Purpose:**  
  It memoizes the **result of a calculation or function** — i.e., it caches a value so that expensive calculations are only re-computed when dependencies change.

- **Usage:**  
  Inside a component:

  ```jsx
  const computedValue = React.useMemo(() => {
    // expensive computation
    return result;
  }, [dependencies]);
  ```

- **When to use:**  
  When you want to **memoize a value or function** inside a component to prevent unnecessary re-computation.

---

### **Summary**

| Aspect         | `React.memo()`                         | `React.useMemo()`                                          |
| -------------- | -------------------------------------- | ---------------------------------------------------------- |
| Type           | Higher-Order Component (HOC)           | Hook (inside a component)                                  |
| Purpose        | Memoize entire component rendering     | Memoize a value or calculation result                      |
| Usage scenario | Prevent re-rendering of a component    | Prevent re-computation of a value or function              |
| Example        | `export default React.memo(Component)` | `const memoizedValue = React.useMemo(() => {...}, [deps])` |

---

### **In a nutshell:**

- Use **`React.memo()`** to **wrap a component** and avoid re-rendering when props haven't changed.
- Use **`React.useMemo()`** inside a component to **memoize a computed value** or function, optimizing performance for expensive calculations.

---

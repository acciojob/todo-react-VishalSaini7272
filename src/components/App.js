
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";
import Todo from "./Todo";
import './../styles/App.css';

function App() {
  const [task, setTask] = useState("");        // stores current input
  const [todos, setTodos] = useState([]);      // stores all todo items

  const handleAddTodo = () => {
    if (task.trim() === "") return; // prevent empty input
    setTodos([...todos, task]);
    setTask("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <h1 className="title">React To-Do List</h1>

      <div className="todo-input">
        <input
          id="task-input"
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id="add-btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <Todo todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;

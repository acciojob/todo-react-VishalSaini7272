

function Todo({ todos, handleDeleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-text">No tasks yet! Add one above 👆</p>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="todo-item"
            data-test-id="todo-item"
          >
            <span className="task-text">{todo}</span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTodo(index)}
              data-test-id={`delete-btn-${index}`}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Todo;


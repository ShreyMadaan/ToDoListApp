function Todo({todo,index,deleteToDo}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => deleteToDo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;

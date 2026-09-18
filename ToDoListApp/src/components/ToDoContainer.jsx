import Todo from "./Todo";

function ToDoContainer({ todos, deleteToDo }) {
  return (
    <div className="container">
      {todos.map((todo , index) => {
        return (
          <Todo key={`${todo}-${index}`} todo={todo} index={index} deleteToDo={deleteToDo} />
        )
      })}
    </div>
  );
}

export default ToDoContainer;

import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeToDo(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function deleteToDo(todo) {
    setTodos((prevTodos) => prevTodos.filter( (prevTodo,prevIndex) => {
      return prevIndex !== todo
    }));
  }

  return (
    <main>
      <h1>To Do List</h1>

      <InputContainer
        inputVal={inputVal}
        writeToDo={writeToDo}
        addTodo={addToDo}
      />

      <ToDoContainer todos={todos} deleteToDo={deleteToDo} />
    </main>
  );
}

export default App;

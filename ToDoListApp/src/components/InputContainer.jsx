function InputContainer({inputVal, writeToDo, addTodo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeToDo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;

function InputContainer({inputVal, writeToDo, addTodo}) {
  function handleSubmit(event) {
    event.preventDefault();
    addTodo();
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputVal}
        onChange={writeToDo}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default InputContainer;

import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState({ id: 0, todoItem: "" });
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTodo((values) => ({ ...values, [name]: value }));
  };

  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setTodo({ id: todo.id + 1, todoItem: "" });
  };

  const deleteTodo=(id)=>{
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
  }

  return (
    <div
      className="w-100 d-flex "
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <label>Todo-List</label>
      <div className="d-flex">
        <input
          type="text"
          name="todoItem"
          value={todo.todoItem}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.id}: {todo.todoItem}
          <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;

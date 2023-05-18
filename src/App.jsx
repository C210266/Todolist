import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Total from "./components/Total";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState('');
  return (
    <div className='App'>
      <div className='container'>
        <h1>TODOLIST APP</h1>

        {/**Bắt đầu form */}
        <Form
          input={input}
          setInput={setInput}
          todo={todos}
          setTodo={setTodos}
        />
        {/**Kết thúc form */}

        {/**Bắt đầu List */}
        <List
          todo={todos}
          setTodo={setTodos}
          edit={edit}
          setEdit={setEdit}

        />
        {/**Kết thúc List */}


        {/**Bắt đầu Total */}
        <Total />
        {/**Kết thúc Total */}
      </div>
    </div>
  );
}

export default App;

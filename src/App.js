import "./App.css";
import React, { useState } from "react";
import TODOlist from "./todolist";

function App() {
  let [task, setTask] = useState("");
  let [newtaskadded, setnewtaskadded] = useState([]);

  let inputonchangehandler = (e) => {
    // console.log(e)
    setTask(e.target.value);
  };
  let todolisthandler = (e) => {
    e.preventDefault();
    let data = task;
    setnewtaskadded([...newtaskadded, data]);

    setTask("");
  };
  let deleteitem = (a) => {
    let deleted_array = newtaskadded.filter((current_task, index) => {
      return index !== a;
    });
    setnewtaskadded(deleted_array);
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white header-bar">
            <div className="col p-2">
              <h4 className="text-center">Todo App </h4>
            </div>
          </div>
          <form onSubmit={todolisthandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  placeholder="Enter Task"
                  value={task}
                  onChange={inputonchangehandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>
          {newtaskadded.map((value, index) => {
            return (
              <TODOlist
                key={index}
                id={index}
                task={value}
                onselect={deleteitem}
              />
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default App;

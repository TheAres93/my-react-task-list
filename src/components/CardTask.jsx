import "./general.css";
import React, { useState } from "react";

function CardTask(props) {
  const { task, DeleteTask, CompleteTask, EditTask, InputOn, } = props;
  const [editTask, setEditTask] = useState(task.title);

 function renderTask(task) {
    if (!task.edit && !task.state) {
      return <div className="descripcion">{task.title}</div>;
    } else if (task.edit) {
      return (
        <input
          className="textarea"
          type="text"
          value={editTask}
          onChange={(event) => setEditTask(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              EditTask(task.id, {title: editTask});
             }}}/>);}
    return <div className="noDescripcion">{task.title}</div>;
 }

 return (
    <div className="tarea">
      <button
          type="button"
          cursor="pointer"
          onClick= {()=>
            CompleteTask(task.id)}
        >
        <span className={`material-symbols-outlined ${task.state ? 'check_circle check' : 'radio_button_unchecked uncheck'}`}>
          {task.state ? 'check_circle' : 'radio_button_unchecked'}
        </span>
      </button>
      {renderTask(task)}
      <div className="icon">
        <button
          type="button"
          cursor="pointer"
          onClick={()=>
            InputOn(task.id)}
        >
          <span className="material-symbols-outlined editar">
            edit
          </span>
        </button>
      </div>
      <div className="icon">
        <button
          type="button"
          cursor="pointer"
          onClick= {()=>
            DeleteTask(task.id)}
        >
          <span className="material-symbols-outlined borrar">
            backspace
          </span>
        </button>
      </div>
    </div>
  );
}

export {CardTask};

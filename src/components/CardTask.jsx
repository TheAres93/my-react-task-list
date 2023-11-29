import { useState } from "react";
import "./general.css";
function CardTask(props) {
  const { task,
  CompleteTask,
  EditTask,
  DeleteTask,
  InputOn } = props;
  const [editTitleTask, setEditTitleTask] = useState(task.title);
  const [editDescriptionTask, setEditDescriptionTask] = useState(task.description);


 function renderTask(task) {
    if (!task.edit && !task.state) {
      return (
      <div className="descripcion">
        <div className="title">
          {task.title}
        </div>
          {task.description}
      </div>);
    } else if (task.edit) {
      return (
        <div>
          <input
            className="textarea"
            type="text"
            value={editTitleTask}
            onChange={(event) => setEditTitleTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (editTitleTask.trim() !== "")) {
                EditTask(task.id, {title: editTitleTask}, {description: editDescriptionTask} );
              }}}/>
          <br/>
          <input
            className="textarea"
            type="text"
            value={editDescriptionTask}
            onChange={(event) => setEditDescriptionTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (editTitleTask.trim() !== "")) {
                EditTask(task.id, {title: editTitleTask}, {description: editDescriptionTask} );
              }}}/>
          
        </div>
      );
    }
        

    return (
      <div className="noDescripcion">
        <div className="title">
          {task.title}
        </div>
          {task.description}
      </div>);
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

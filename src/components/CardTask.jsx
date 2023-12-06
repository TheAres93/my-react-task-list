import { useContext, useState } from "react";
import "./general.css";
import Context from "../context/context";
import Form from "./Form";
function CardTask(props) {
  const {
    CompleteTask,
    DeleteTask,
    InputOn,
  } = useContext(Context);
  const { task } = props;


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
          <Form action="EditTask" id={task.id} titulo={task.title} descripcion={task.description} />
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
      {task.edit === false ?<button
          type="button"
          cursor="pointer"
          onClick= {()=>
            CompleteTask(task.id)}
        >
        <span className={`material-symbols-outlined ${task.state ? 'check_circle check' : 'radio_button_unchecked uncheck'}`}>
          {task.state ? 'check_circle' : 'radio_button_unchecked'}
        </span>
      </button> : <div></div>}
      {renderTask(task)}
      <div className="icon">
        <button
          type="button"
          cursor="pointer"
          onClick={()=>
            InputOn(task.id)}
        >
          {task.edit === false?<span className="material-symbols-outlined editar">
            edit
          </span>:<span className="material-symbols-outlined uncheck">
            cancel
          </span>}
        </button>
      </div>
      <div className="icon">
      {task.edit === false ?<button
          type="button"
          cursor="pointer"
          onClick= {()=>
            DeleteTask(task.id)}
        >
          <span className="material-symbols-outlined borrar">
            backspace
          </span>
        </button>: <div></div>}
      </div>
    </div>
  );
}

export {CardTask};

import { useState } from "react";

function Barra(props){
  const { tasks, Update } = props;
  const [inputTask, setInputTask] = useState("");
    
  function AddTask() {
    if (inputTask.trim() === "") {
      return;
    }

    const newSetTasks = [...tasks];
    const newTask = {
      id: String(Date.now()),
      title: inputTask,
      state: false,
      edit: false,
    };

    newSetTasks.push(newTask);
    Update(newSetTasks);
    setInputTask("");
  };
  
  function ClearAllTasks(){
    localStorage.clear("tasks");
    Update([]);
  };

  return(
    <div className="barra">
          <input
            className="textarea"
            type="text"
            placeholder="Nombre de la tarea"
            value={inputTask}
            onChange={(event) => setInputTask(event.target.value)}
            onKeyDown={(event) => {if (event.key === "Enter") {AddTask();}}}/>

          <div className="icon">
            <button type="button" cursor="pointer" onClick={AddTask} >
              <span className="material-symbols-outlined add"> add </span>
            </button>
          </div>
          <button className="icon" onClick={ClearAllTasks}>
          <span className="material-symbols-outlined borrar">delete</span></button>
        </div>
  )
};

export default Barra;
import { useState } from "react";

function Barra(props) {
  const { tasks, Update } = props;
  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");

  function AddTask() {
    if (titleTask.trim() === "" || descriptionTask.trim() === "") {
      return;
    }

    const newTasks = [...tasks];
    const newTask = {
      id: String(Date.now()),
      title: titleTask,
      description: descriptionTask,
      state: false,
      edit: false,
    };

    newTasks.push(newTask);
    Update(newTasks);
    setTitleTask("");
    setDescriptionTask("");
  }

  function ClearAllTasks() {
    localStorage.clear("tasks");
    Update([]);
  }

  return (
    <div className="barra">
      <input
        className="textarea"
        type="text"
        placeholder="Título de la tarea"
        value={titleTask}
        onChange={(event) => setTitleTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            AddTask();
          }
        }}
      />

      <div className="icon">
        <button
          type="button"
          cursor="pointer"
          onClick={AddTask}
        >
          <span className="material-symbols-outlined add">add</span>
        </button>
      </div>

      <input
        className="textarea"
        type="text"
        placeholder="Descripción de la tarea"
        value={descriptionTask}
        onChange={(event) => setDescriptionTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            AddTask();
          }
        }}
      />

      <button className="icon" onClick={ClearAllTasks}>
        <span className="material-symbols-outlined borrar">delete</span>
      </button>
    </div>
  );
}

export default Barra;

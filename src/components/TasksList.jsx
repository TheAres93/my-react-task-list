import React from "react";
import "./general.css";
import { CardTask } from "./CardTask";

function AllApp(props) {
  const { tasks, Update } = props;

  function MapsTasks() {
    return (
      tasks.map((task) => (
        <CardTask
          key={task.id}
          task={task}
          CompleteTask={CompleteTask}
          EditTask={EditTask}
          DeleteTask={DeleteTask}
          InputOn={InputOn}
        />
      ))
    );
  }

  function CompleteTask(id) {
    const newSetTasks = tasks.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          state: !tarea.state,
        };
      }
      return tarea;
    });

    Update(newSetTasks);
    return newSetTasks;
  }

  function EditTask(id, nuevaTarea) {
    const newSetTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: nuevaTarea.title,
          edit: false,
          state: false,
        };
      }
      return task;
    });

    Update(newSetTasks);
    return newSetTasks;
  }

  function DeleteTask(id) {
    const newSetTasks = tasks.filter((tarea) => tarea.id !== id);

    Update(newSetTasks);

    return newSetTasks;
  }

  function InputOn(id) {
    const newSetTasks = tasks.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          edit: !tarea.edit,
        };
      }
      return tarea;
    });

    Update(newSetTasks);
    return newSetTasks;
  }

  return (
    <div>
      {MapsTasks()}
    </div>
  );
}

export default AllApp;

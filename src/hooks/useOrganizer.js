import { useEffect, useState } from 'react'

const useOrganizer = () => {

    const [editTask, setEditTask] = useState();
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  function Update(newSetTasks){
    localStorage.setItem("tasks", JSON.stringify(newSetTasks));
    setTasks(newSetTasks);
  }
    
  function AddTask(titleTask, descriptionTask) {

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

  function EditTask(id, title, description) {
    const newSetTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
          description: description,
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

  function DeleteAllTasks() {
    localStorage.clear("tasks");
    Update([]);
  }

      return {
        AddTask,
        CompleteTask,
        EditTask,
        DeleteTask,
        InputOn,
        DeleteAllTasks,
        tasks,
      };
    };

export default useOrganizer;
import React from "react";
import "./general.css";
import { CardTask } from "./CardTask";
import useOrganizer from '../hooks/useOrganizer';
import Barra from "./Barra";

function AllApp() {
  const {
    AddTask,
    CompleteTask,
    EditTask,
    DeleteTask,
    InputOn,
    DeleteAllTasks,
    titleTask, setTitleTask,
    descriptionTask, setDescriptionTask,
    tasks,
  } = useOrganizer()
 

  return (
    <div>
      <Barra
      AddTask={AddTask}
      titleTask={titleTask}
      descriptionTask={descriptionTask}
      DeleteAllTasks={DeleteAllTasks}
      setTitleTask={setTitleTask}
      setDescriptionTask={setDescriptionTask}/>
      {tasks.map((task) => (
        <CardTask
          key={task.id}
          task={task}
          CompleteTask={CompleteTask}
          EditTask={EditTask}
          DeleteTask={DeleteTask}
          InputOn={InputOn}
        />
      ))}
    </div>
  );
}

export default AllApp;

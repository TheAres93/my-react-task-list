import './App.css'
import Barra from './components/Barra';
import Header from './components/Header'
import AllApp from './components/TasksList'
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([])

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


  return(
    <div>
      <Header tasks={tasks}/>
      <Barra tasks={tasks} Update={Update}/>
      <AllApp tasks={tasks} Update={Update}/>
  </div>
)};

export default App

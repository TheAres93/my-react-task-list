import React from 'react';
import './general.css';
import { CardTask } from './CardTask';
import Context from '../context/context';
import { useContext } from 'react';

function AllApp() {
  const {
    tasks,
  } = useContext(Context);

  return (
    <div>
      {tasks.map((task) => (
        <CardTask
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default AllApp;

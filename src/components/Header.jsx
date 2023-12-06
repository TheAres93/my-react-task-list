import './general.css';
import { useContext } from 'react';
import Context from "../context/context";

function Header(){
  const {
    tasks
  } = useContext(Context);
  
    return (
      <div>
      <div className='header'>
            Organizador de tareas
      </div>
      <div className='descripcion'>
        Tareas registradas: {tasks.length}
      </div>
      </div>
    );
  }

export default Header;

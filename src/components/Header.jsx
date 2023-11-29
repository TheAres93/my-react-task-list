import useOrganizer from '../hooks/useOrganizer';
import './general.css';

function Header(){
  const {
    tasks
  } = useOrganizer()
  
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

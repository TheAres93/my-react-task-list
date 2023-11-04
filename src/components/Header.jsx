import './general.css';

function Header(props){
  const tasks= props.tasks
  
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

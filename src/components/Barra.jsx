import { useContext } from 'react';
import Context from '../context/context';
import Form from './Form';
function Barra() {

  const {
    DeleteAllTasks
  } = useContext(Context);


  return (
    <div>
      <Form action="AddTask"/>

      <button onClick={DeleteAllTasks}>
        <span className='material-symbols-outlined icon borrar'>delete</span>
      </button>
    </div>
  );
}

export default Barra;

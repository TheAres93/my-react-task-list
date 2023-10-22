import { listaDeTareas } from "../../Data";
import { Task } from "./Task";

function TaskList(){
    return(
        <div className="ListTasks">
            {listaDeTareas.map((descripcion, id)=>{
                return <Task key={id} tarea={descripcion}/>
            })}
        </div>
    )
}

export {TaskList}

function Barra(){
    return (
      <div className="Barra">
        <input className='escrito' type="text" placeholder="Nombre de la tarea" />

        <div className='icon'>
            <button type="button" cursor="pointer">
            <img src="./public/search.svg"/>
            </button>
        </div>
        <div className='icon'>
            <button type="button" cursor="pointer">
            <img src="./public/add.svg"/>
            </button>
        </div>
    </div>
    );
  }

export {Barra}
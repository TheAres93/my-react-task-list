import { listaDeTareas } from "../../Data";
import { Task } from "./Task";

function TaskList(){
    return(
        <div className="listTasks">
            {listaDeTareas.map((descripcion, id)=>{
                return <Task key={id} tarea={descripcion}/>
            })}
        </div>
    )
}

export {TaskList}
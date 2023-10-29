import { listaDeTareas } from "../../Data";

function Footer(){
  let tareasCompletadas = 0;
  let tareasPendientes = 0;

  for (let tarea of listaDeTareas) {
    if (tarea.estado === "completado") {
      tareasCompletadas++;
    } else {
      tareasPendientes++;
    }
  }

  return (
        <div className='footer'>
          <div className="todas">
            Tareas registradas: {listaDeTareas.length}
          </div>  
          <div className="completadas">
            Tareas completadas: {tareasCompletadas}
          </div>
          <div className="pendientes">
            Tareas pendientes: {tareasPendientes}
          </div>
      </div>
  );
}

export {Footer}

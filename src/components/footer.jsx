import { listaDeTareas } from "../../Data";

function Futer(){
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
    <footer>
        <div className='Descripcion'>Tareas registradas: {listaDeTareas.length}</div>
      <div className='Descripcion'>
        Tareas completadas: {tareasCompletadas}
      </div>
      <div className='Descripcion'>
        Tareas pendientes: {tareasPendientes}
      </div>
    </footer>
  );
}

export {Futer}

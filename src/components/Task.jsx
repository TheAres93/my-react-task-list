import './general.css';

function Task(props) {
  const { tarea } = props;
  return (
    <div className="Tarea">
      {tarea.estado === "completado" ? (
        <img className='completado' src="./public/check.svg" />
      ) : (
        <img className='pendiente' src="./public/uncheck.svg" />
      )}
      <div className='Descripcion'>{tarea.descripcion}</div>
      <div className='icon'>
        <button type="button" cursor="pointer">
          <img src="./public/edit.svg"/>
        </button>
      </div>
      <div className='icon'>
        <button type="button" cursor="pointer">
          <img src="./public/delete.svg"/>
        </button>
      </div>
    </div>
  );
};

export { Task };

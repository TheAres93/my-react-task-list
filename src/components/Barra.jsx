function Barra(props) {

  const {AddTask, titleTask, descriptionTask, DeleteAllTasks, setTitleTask, setDescriptionTask} = props
  
  return (
    <div className="barra">
      <input
        className="textarea"
        type="text"
        placeholder="Título de la tarea"
        value={titleTask}
        onChange={(event) => setTitleTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            AddTask();
          }
        }}
      />

      <div className="icon">
        <button
          type="button"
          cursor="pointer"
          onClick={AddTask}
        >
          <span className="material-symbols-outlined add">add</span>
        </button>
      </div>

      <input
        className="textarea"
        type="text"
        placeholder="Descripción de la tarea"
        value={descriptionTask}
        onChange={(event) => setDescriptionTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            AddTask();
          }
        }}
      />

      <button className="icon" onClick={DeleteAllTasks}>
        <span className="material-symbols-outlined borrar">delete</span>
      </button>
    </div>
  );
}

export default Barra;

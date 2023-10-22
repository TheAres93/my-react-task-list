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
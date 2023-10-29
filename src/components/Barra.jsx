function Barra(){
    return (
      <div className="barra">
        <input className='textarea' type="text" placeholder="Nombre de la tarea" />
        <div className='icon'>
            <button type="button" cursor="pointer">
            <span className="material-symbols-outlined search" >
search
</span>
            </button>
        </div>
        <div className='icon'>
            <button type="button" cursor="pointer">
            <span class="material-symbols-outlined add">
add
</span>
            </button>
        </div>
    </div>
    );
  }

export {Barra}
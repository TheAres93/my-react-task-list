import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '../context/context';

function Form(props) {
  const {action, id, titulo, descripcion} = props

    const [titleTask, setTitleTask] = useState("");
    const [descriptionTask, setDescriptionTask] = useState("");
    const [updateTitleTask, setUpdateTitleTask] = useState("");
    const [updateDescriptionTask, setUpdateDescriptionTask] = useState("");
    const [formValidation, setFormValidation] = useState({
        title: false
    });

  const {
    AddTask,
    EditTask
  } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isValid()) {
      switch (action) {
        case 'AddTask':
          setTitleTask("");
          setDescriptionTask("");
          AddTask(titleTask, descriptionTask);
          break;
        case 'EditTask':
          setUpdateTitleTask("");
          setUpdateDescriptionTask("");
          EditTask(id, updateTitleTask, updateDescriptionTask);
          break;
        default:
          break;
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  function isValid() {
    return Object.keys(formValidation).every(
      (key) => formValidation[key] === true
    );
  }

  function handleTitleValidation(event) {
    const value = event.target.value;

    if (value.trim().length === 0) {
      setFormValidation({
        ...formValidation,
        title: 'El título es requerido.'
      });
    } else if (value.trim().length < 3) {
      setFormValidation({
        ...formValidation,
        title: 'El título debe tener más de 2 caracteres.'
      });
    } else {
      setFormValidation({
        ...formValidation,
        title: true
      });
    }
    if(action === 'AddTask'){
      setTitleTask(value);
    } else{
      setUpdateTitleTask(value)
    }
  }

  return (
    <form className="barra" onSubmit={handleSubmit}>
        <input
          className='textarea'
          type='text'
          placeholder={action === 'AddTask' ? 'Título de la tarea' : `Anterior: ${titulo}`}
          value={action === 'AddTask' ? titleTask : updateTitleTask}
          onChange={handleTitleValidation}
          onKeyDown={handleKeyDown}
          disabled={!isValid}
        />
        <div>{formValidation.title && <span className='uncheck'>{formValidation.title}</span>}</div>
        <textarea
          className='textarea'
          placeholder={action === 'AddTask' ? 'Descripción de la tarea' : `Anterior: ${descripcion}`}
          value={action === 'AddTask' ? descriptionTask : updateDescriptionTask}
          onChange={action === 'AddTask' ?
          (event) => setDescriptionTask(event.target.value) 
          : (event) => setUpdateDescriptionTask(event.target.value) }
          onKeyDown={handleKeyDown}
          rows={2}
        />
        {action === 'AddTask' ? <button disabled={!isValid} type='button' cursor='pointer' onClick={handleSubmit}>
          Agregar Tarea
        </button> :
        <button disabled={!isValid} type='button' cursor='pointer' onClick={handleSubmit}>
        Editar Tarea
        </button>}
      </form>
  );
}

export default Form;

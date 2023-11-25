import React, { useState } from 'react';
import '../style/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); //extraer el valor del campo del texto que trajo el usuario
    };

    const manejarEnvio = e => {
        e.preventDefault();//no se vuelve a cagar toda la app cuando enviamos 

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completado: false
        }
        props.onSubmit(tareaNueva);
        setInput('');
    };


    return(
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}
        >
        <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe tu tarea'
            name='texto'
            onChange={manejarCambio}
            value={input}
        />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;
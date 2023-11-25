import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../style/ListaDeTareas.css'

function ListaDeTareas() {

    const [tareas, setTareas] = useState ([]);

    const agregarTarea = tarea => {
        console.log('Antes: ' + tareas);
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]; //le da el nuevo valor a la funcion setTareas
            setTareas(tareasActualizadas); //desencadena todo el proceso de actualizaicon
        }
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.competada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tarea-lista-contenedor'>
                {
                    tareas.map((tarea)=>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada} 
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea} />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;
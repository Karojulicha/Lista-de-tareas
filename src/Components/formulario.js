import React, { UseState, UseEffect } from "react";

const formulario = (promp) => {
   const [InputText, SetInputText] = UseState("");

   const manejartarea = (Event) => {
    SetInputText(Event.target.velue);
    console.log (InputText)
   }


    return (    
        <div>
            <span> Añadir tarea </span>
            <form className="tarea">
                <span> Añadir tarea 1° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input> 
                 <br></br>
                <span> Añadir tarea 2° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 3° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 4° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 5° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 6°</span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 7° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>
                <br></br>
                <span> Añadir tarea 8° </span>
                <input placeholder=" Ingresa aqui la tarea" type="checkbox">   </input>

            </form>
            <input> </input>
            <button></button>
        </div> 
    )
}

export default formulario
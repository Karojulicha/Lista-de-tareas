import React, {useState} from "react";

const Formulario = (promp) => {

    
    const [InputText, SetInputText] = useState("");

   const ManejarTarea = (Event) => {
    SetInputText(Event.target.velue);
    console.log (InputText) }

    return (    
        <div>
            
            <form className="tarea">
                <span> Añade tarea: </span>
                <input placeholder = {"Agrega nueva tarea"}  value ={InputText} onChange={ManejarTarea} ></input>
            </form>
            <button>Agregar a lista</button>
        </div> 
    )
}

export default Formulario
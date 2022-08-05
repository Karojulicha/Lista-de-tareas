import React, {useState} from "react";
import { Button, } from '@chakra-ui/react'
import OtherComponent from './OtherComponent';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Formulario = (promp) => {

    
    const [Text, SetText] = useState("");
     
    
   const ManejarTarea = (e) => SetText(e.target.value);


    const EnviarDatos = (e) => {
        e.preventDefault();
        
    }

    return (    
        <div>
            
            <form onSubmit={EnviarDatos} >
                <span> Añade tarea: </span>
                <input  type="text" placeholder = {"Agrega nueva tarea"}  value ={Text} onChange={ManejarTarea} ></input>
            </form>
            <Button type="Submit">Agregar a lista</Button>
        </div> 
    )
}

export default Formulario
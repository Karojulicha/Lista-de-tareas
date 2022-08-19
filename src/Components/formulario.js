import React, {useState} from "react";
import { Button, FormControl, Input } from '@chakra-ui/react'

const Formulario = (props) => {
     const [Text, setText] = useState("");
     const [valida, setValida] = useState(true);
     const ManejarTarea = (event) => {setText(event.target.value); }

     
     const [ Info, setInfo ] = useState("");
     const ManejarNota = (event) => { setInfo (event.target.value)};

    const EnviarDatos = (event) => {
        event.preventDefault();
        if(Text.trim() !== ""  ){
            props.NuevaTarea (Text);
            setText("");
            setValida(true)
        } else {
            setValida(false);
        }

     const EnviarDatos = (event) => {
        event.preventDefault();
        props.NuevaNota (Info);
     }   
    };

    return (    
        <div>

            <FormControl isRequired onSubmit={EnviarDatos} >
                <span> Añade tarea: </span>
                <Input type='text' placeholder = {"Nombre de la tarea"} value={Info} onChange ={ManejarNota} minlength ="3" required></Input>
                <Input  type="text" placeholder = {"Descripción"}  value ={Text} onChange={ManejarTarea}></Input>
            </FormControl>
            <Button type="Submit">Agregar a lista</Button>
            {!valida && <div className=" validar">Añade tarea</div>}
        </div> 
    )
}

export default Formulario;

import React, {useEffect, useState} from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Header from './Components/Hearder';
import TareaEstatic from './Components/TareasEstatic';


function App() {
  return (
    <div>
      
   <Header Titulo={"Mi lista de tareas"}/>
   <Formulario></Formulario>
   <TareaEstatic></TareaEstatic>
   
     
    </div>
  );
}

export default App;

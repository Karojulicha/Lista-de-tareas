import React, { Suspense, useState } from 'react';
//import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import Formulario from './Components/Formulario';
import Header from './Components/Hearder';
import TareaEstatic from './Components/TareasEstatic';



function App() {
  const [ListaTareas, setListaTareas]= useState([])
 
  const NuevaTarea = (tarea)=> {
    setListaTareas(tarea,...ListaTareas)
  }

  const [ListaNota, setListaNota]= useState([])

  const NuevaNota = (Nota)=>{ 
    setListaNota (Nota, ...ListaNota)
  }
  return (
    <Suspense fallback={<h1>"Loading..."</h1>}>
  
    <div> 
       
   <Header Titulo={"Mi lista de tareas"}/>
 
   <Formulario>
    NuevaTarea={NuevaTarea}
    NuevaNota= {NuevaNota}
   </Formulario>

   <TareaEstatic></TareaEstatic>
      </div>
    </Suspense>
  );
} export default App;

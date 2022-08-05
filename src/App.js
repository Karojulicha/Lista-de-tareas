import React, { Suspense } from 'react';
//import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import './App.css';
import Formulario from './Components/Formulario';
import Header from './Components/Hearder';
import TareaEstatic from './Components/TareasEstatic';
import OtherComponent from './Components/Formulario';
const OtherComponent = React.lazy(() => import('.Components/Formulario'));


function App() {
  return (
    <Suspense fallback={<h1>"Loading..."</h1>}>
  
    <div> 
       
   <Header Titulo={"Mi lista de tareas"}/>
 
   <Formulario></Formulario>

   <TareaEstatic></TareaEstatic>
      </div>
    </Suspense>
  );
}





export default App;

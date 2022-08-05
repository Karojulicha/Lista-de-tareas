import React, {  } from 'react';
//import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import './App.css';
import Formulario from './Components/Formulario';
import Header from './Components/Hearder';
import TareaEstatic from './Components/TareasEstatic';
import OtherComponent from './OtherComponent';
const OtherComponent = React.lazy(() => import('./OtherComponent'));

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

import React, {} from "react";
import OtherComponent from './OtherComponent';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

const TareaEstatic =(promp) => {


    return(

       [

        <div>
            <label>
                  <span> 1. Realizar actividades del Tecnologo </span> <input type="checkbox" ></input>
                  <span> 2. Realizar edicion de video </span> <input type="checkbox" ></input>
                  <span> 3. Realizar actividades de Disruptia </span> <input type="checkbox" ></input>
                  <span> 4. Ir a las clases de la universidad </span> <input type="checkbox" ></input>
                  <span> 5. realizar actividad fisica de vez en cuando </span> <input type="checkbox" ></input>
      
            </label>
        </div>
      

    ] 

    )
}
export default TareaEstatic;
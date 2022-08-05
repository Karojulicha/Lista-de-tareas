import React from "react";
import OtherComponent from './OtherComponent';

const OtherComponent = React.lazy(() => import('./Components/Hearder'));


function Header ({Titulo}){
     return( 
     <div>
         <h1>
            <a href='#!' className="brand-logo">{Titulo}</a>
         </h1>
     </div>
)
  
}
export default Header;
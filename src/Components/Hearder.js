import React from "react";


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
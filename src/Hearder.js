import React from "react";

function Header ({titulo}){
     return( 
     <div>
         <h1>
            <a href='#!' className="brand-logo">{titulo}</a>
         </h1>
     </div>
)
  
}
export default Header;
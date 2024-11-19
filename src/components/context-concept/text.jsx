import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function ContexttextComponent(){

  // const getStateFromGlobalContext = useContext(GlobalContext);
  const{theme} = useContext(GlobalContext)
  // console.log(getStateFromGlobalContext)
  return(
   <div>
    <h1 
    style={
      {
        fontSize:theme === 'light' ? '50px' : '100px' ,
        backgroundColor : theme === 'light' ? 'white' : "#000",
        color: theme === 'light' ? 'blue' : 'yellow',
      }
    }>NANI</h1>
   </div>
  )
}

export default ContexttextComponent;
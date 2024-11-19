import React, { useContext } from "react"
import { GlobalContext } from "../../context"
function ContextButtonComponent(){

  const {handleChangeThemeOnButtonClick,theme} = useContext(GlobalContext)

  return(
    <div>
      <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
    </div>
  )
}

export default ContextButtonComponent
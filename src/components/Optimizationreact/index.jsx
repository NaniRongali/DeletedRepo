import React, { useEffect, useRef } from 'react'

function Hooks() {

  // const countValue = useRef(0);
  // function handleClick(){
  //   countValue.current++;
  //   console.log(countValue.current);
  // }
  const divElement = useRef("");
  useEffect(()=>{
const getDivreference = divElement.current;
getDivreference.style.color = "red";
console.log(getDivreference);
  },[])

  return (
    <div>
      <h1>UsecALL bACK uSE MEMO USE REF HOOKS LEARNING</h1>
      {/* <button onClick={handleClick}>Update</button> */}
      <div ref={divElement}>
        Some Random Access
      </div>
    </div>
  )
}

export default Hooks

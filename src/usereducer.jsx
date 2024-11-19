import { useReducer } from "react";
import React from "react";
const initialState = {
  showTextFlag: false,
  ChangeTextStyleFlag : false
}

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state,action){
  switch(action.type){
    case HIDE_TEXT:
      return {
        ...state,
        showTextFlag: false
      };

      case SHOW_TEXT:
        return {
          ...state,
          showTextFlag: true
        };
  

      case CHANGE_TEXT_STYLE:
        return {
...state,
showTextFlag:false
        };
      



      default:
        return state;
  }
}

function UseReducerExample(){
  const [state,dispatch] = useReducer(reducer,initialState);

  console.log(state);
  return <div>
    {
      state?.showTextFlag ? <h3>Use Reducer Hook Example</h3> :    null
    }

    <button onClick={()=> dispatch({type:'HIDE_TEXT'})}>Hide Text</button>
    <button onClick={() => dispatch({type:'SHOW_TEXT'})}>Show Text</button>
    <button onClick={()=> dispatch({type:'CHANGE_TEXT_STYLE'})}>Toggle Text Styles</button>
  </div>
}

export default UseReducerExample;
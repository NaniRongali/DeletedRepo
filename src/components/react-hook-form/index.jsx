import {useForm} from "react-hook-form";
import React from "react";
function ReactHookFormExamplePage(){

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  function onSubmitForm(formData){
    console.log(formData);
  }
  return(
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Password<input {...register("password")} 
          name="password" 
          type="password"/>
          </label>
          <label>Email<input
           {...register("email")} 
           name="email"
            type="email"/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ReactHookFormExamplePage;
import { useEffect, useState } from "react";

function useFetch(url,options={}){
const[data,setdata] = useState(null);
const[loading,setLoading] = useState(false);
const[error,setError] = useState(null);


async function fetchData(){
  setLoading(true);
  try{

    const response = await fetch(url,{...options})

    if(response.ok)throw new Error(response.statusText)
  }catch(error){
    console.log(error);
  }
}


useEffect(()=>{
  fetchData();
},[url])
}


export default useFetch;
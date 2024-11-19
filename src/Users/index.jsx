import { useEffect } from "react";
import { useState } from "react";
import React from "react";



function Users(){
  const [usersList,setUsersList] = useState([]);
  const [pending,setPending] = useState(true);

async function fetchAllUsers(){
  try {
    setPending(true)
    const apiresponse = await fetch('https://dummyjson.com/users');
    const result  = await apiresponse.json();
    if(result?.users){
      setUsersList(result?.users);
      setPending(false)
    }else{
      setUsersList([]);
      setPending(false)
    }
    console.log(result);
  } catch (error) {
    console.log(error)
    
  }
}
  useEffect(()=>{
     fetchAllUsers()
  },[]);

  if(pending) return <h1>Fetching uSERS IS WAITING</h1>

  console.log(usersList);
  return( 
  <div>
    <h1>All Users Page</h1>
    <ul>
    {
      usersList && usersList.length > 0 ?
       (
        usersList.map(userItem => <li key={userItem.id}>
          <p>{userItem?.firstName} {userItem?.lastName}</p>

        </li>
        )
        ):<h1>Loading Happend</h1>
    }
      </ul>
     
  </div>
  )
}

export default Users;
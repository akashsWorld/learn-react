import React from 'react'
import {useRouteError} from 'react-router-dom';

const ErroComponent = () => {
    const error = useRouteError();
    let message= 'Could not find the server.';
    if(error.status==500){
      message = error.data.message;
    }
  return (
    <div>
      <h1> {message}</h1>
    </div>
  )
}

export default ErroComponent


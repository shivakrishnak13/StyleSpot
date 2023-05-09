import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

const auth = useSelector((store)=> store.loginReducer.loggedIn);


if(!auth){
 return <Navigate to="/login"/>
}

  return children
}

export default PrivateRoute;
import React , { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Login</div>

   return (
   <div>
      WlCOME {user.username}
   </div>
   );
}


export default Login;
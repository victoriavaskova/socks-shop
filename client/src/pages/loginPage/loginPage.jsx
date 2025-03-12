import React from 'react'
import LoginForm from '../../features/LoginForm/LoginForm';



export default function LoginPage({setUser}) {
    return (
      <>
      <LoginForm setUser={setUser}/>
      </>
    );
  }
  
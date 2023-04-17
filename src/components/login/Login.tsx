import React from 'react'
import './Login.scss'
import { Button } from '@mui/material'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../Firebase';

function Login() {
  const singIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className='login'>
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={singIn}>Sign In</Button>
    </div>
  );
};

export default Login

import React from 'react'
import './Login.scss'
import { Button } from '@mui/material'

function Login() {
  return (
    <div className='login'>
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button>Sign In</Button>
    </div>
  )
}

export default Login
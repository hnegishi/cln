import React from 'react'
import './ChatMessage.scss';
import { Avatar } from '@mui/material';

const ChatMessage = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          tarou yamada
          <span className='messageTimestamp'>
            {new Date().toUTCString()}
          </span>
        </h4>
        <p>hogehoge</p>
      </div>
    </div>
  )
}

export default ChatMessage
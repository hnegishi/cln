import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export const Chat = () => {
  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader />
      {/* chat messages */}
      <div className="chatMessages">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chat input */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="Message #general" />
          <button type="submit" className='chatInputButton'>Send Message</button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat

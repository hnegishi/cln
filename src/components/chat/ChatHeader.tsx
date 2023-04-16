import React from 'react'
import './ChatHeader.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

export const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatChannelName'>#general</span>
          channel name
        </h3>
      </div>

      <div className='chatHeaderRight'>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleOutlineIcon />
        <div className='chatHeaderSearch'>
          <input type='text' placeholder='Search' />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  )
}

export default ChatHeader;

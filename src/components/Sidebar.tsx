import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
  return (
    <div className="sidebar">
      { /* sidebar left */ }
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src= "./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src= "./logo192.png" alt="" />
        </div>
      </div>

      { /* sidebar right */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>hogehoge</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebar channels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
            </div>
            <AddIcon className="sidebarAddIcon"/>
          </div>

          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
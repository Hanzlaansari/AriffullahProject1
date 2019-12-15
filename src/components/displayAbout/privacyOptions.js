import React, { useState } from 'react';
import "./displayaboutStyle.css";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PublicIcon from '@material-ui/icons/Public';
import Icon from '@material-ui/core/Icon';

const PrivacyButton=()=> {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [privacy, setPrivacy] = useState("Public")
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (privacy) => {
    setAnchorEl(null);
    setPrivacy(privacy)
  };
  return (

    <div className="privacy-btn-abs">
      <Tooltip title="Privacy" aria-label="privacy">
        <IconButton
          className="icon-button-prvc"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {privacy==="Public" &&
          <PublicIcon className="p-i" />
          }
          {privacy==="Friends" &&
          <Icon className="fas fa-user-friends p-i" />
          }
          {privacy==="Only me" &&
          <Icon className="fas fa-lock p-i" />
          }

        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={()=>{handleClose(privacy)}}
      >
        <MenuItem onClick={() => { handleClose("Public") }}>Public</MenuItem>
        <MenuItem onClick={() => { handleClose("Friends") }}>Friends</MenuItem>
        <MenuItem onClick={() => { handleClose("Only me") }}>Only me</MenuItem>
      </Menu>
    </div>

  );
}
export default PrivacyButton; 
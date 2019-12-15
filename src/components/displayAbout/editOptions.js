import React, { useState } from 'react';
import "./displayaboutStyle.css";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PublicIcon from '@material-ui/icons/Public';
import CreateIcon from '@material-ui/icons/Create';

import Icon from '@material-ui/core/Icon';

const EditButton=(props)=> {

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

    <div className="edit-btn-abs">
      <Tooltip title="Privacy" aria-label="privacy">
        <IconButton
          className="icon-button-edit"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <CreateIcon  className="p-i" />
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
        <MenuItem onClick={() => { handleClose(); props.openEdit(); }}>Edit</MenuItem>
        <MenuItem onClick={() => { handleClose(); props.openDel(); props.setDelIndex(props.index); }}>Delete</MenuItem>
      </Menu>
    </div>

  );
}
export default EditButton; 
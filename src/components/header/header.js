import React from 'react';
// import material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CreateIcon from '@material-ui/icons/Create';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PublicIcon from '@material-ui/icons/Public';
import { connect } from "react-redux";

import './headerStyle.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
let AboutHeaderBar = (props) => {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Manage" aria-label="manage">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <CreateIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" className="header_bar_a1">
            <i className="fas fa-user-friends header_bar_a2"></i>
            About   {props.allFriends.length}
          </Typography>

          {auth && (
            <div>
              <Tooltip title="Privacy" aria-label="privacy">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <PublicIcon />

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
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Public</MenuItem>
                <MenuItem onClick={handleClose}>Friends</MenuItem>
                <MenuItem onClick={handleClose}>Only me</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
const mapSTP = (store) => {
  return { allFriends: store.friendsReducer }
}
export default connect(mapSTP)(AboutHeaderBar);
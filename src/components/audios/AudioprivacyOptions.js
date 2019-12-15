import React, { useState } from 'react';
import "./displayaboutStyle.css";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PublicIcon from '@material-ui/icons/Public';

import Icon from '@material-ui/core/Icon';
import CreateIcon from '@material-ui/icons/Create';
import {connect} from 'react-redux'
import EditAudio from './editAudio'
// import EditCaption from './editVideoModal'
import MessageAudioModal from './messageAudioModal';

const PrivacyAudioButton=(props)=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [edit, setedit] = React.useState(null);
  const [privacy, setPrivacy] = useState("Public")
	const [openEAM, setOpenEAM] = useState(false);
  const [editmodal,seteditmodal]=useState(false);
  const [messageopen,setaudiomessageopen]=useState(false);
  const[messageid,setaudiomessageid]=useState("");
  const [id,setid]=useState("");
  const open = Boolean(anchorEl);
  const openedit = Boolean(edit);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  function closeAudioEM(){
		setOpenEAM(false)
	}
	function openAudioEM(){
		setOpenEAM(true)
	}
  const handleClose = (privacy) => {
    setAnchorEl(null);
    setPrivacy(privacy)
  };
  // handle edit and delete
  const handleEditMeny = event =>{
    setedit(event.currentTarget);
  }
  const handleClodeedit = (privacy) => {
    setedit(null);
  };
  const handleaudioDelete=(id)=>{
    setaudiomessageid(id);
    setaudiomessageopen(true);
    
  }
  const handlemessaclosemodal=()=>{
    setaudiomessageid("");
    setaudiomessageopen(false);
  }


  let openeditmodal= (idd)=>{
    setid(idd);
    seteditmodal(true);
                    }
            let closeeditmodal = ()=>{
              setid("");
                seteditmodal(false);
            }
  return (
<div style={{height:'40px',padding:'0px'}}>
{/* <EditCaption openeditmodall={editmodal} indexx={props.index} id={id} closeeditmodall={closeeditmodal}/> */}
<MessageAudioModal openmodal={messageopen} id={messageid} closemodal={handlemessaclosemodal}/>
<EditAudio openState={openEAM} close={closeAudioEM} index={props.index}/>
<div className="manage-btn-videos-a1">

<Tooltip title="Manage" aria-label="manage">

            <IconButton style={{color:'white'}} aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleEditMeny}
                  color="inherit">
              <CreateIcon />
            </IconButton>
          </Tooltip>
          <Menu
                id="menu-appbar"
                anchorEl={edit}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openedit}
                onClose={handleClodeedit}
              >
                <MenuItem onClick={()=>{openAudioEM(); handleClodeedit()}}>Edit</MenuItem>
                <MenuItem onClick={()=>{handleaudioDelete(props.audioid);handleClodeedit()}}>Delete</MenuItem>
              </Menu>
             
</div>
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
    </div>
  );
}
export default connect(null,null)(PrivacyAudioButton); 
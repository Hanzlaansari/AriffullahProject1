import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./displayaboutStyle.css";
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import PublicIcon from '@material-ui/icons/Public';
import Icon from '@material-ui/core/Icon';
import AddWorkPlace from '../addInfo/addWorkplace/addWorkPlace';
import AddCollege from '../addInfo/addCollege/addCollege';
import BasicInfo from '../addInfo/addYour/basicInfo';
import AddressInfo from '../addInfo/addYour/addressInfo';
import RelationStatus from '../addInfo/addYour/relationStatus';
import AddFamilyMember from '../addInfo/addYour/addFamilyMember';
import AddSchool from '../addInfo/addSchool/addSchool';
import { connect } from "react-redux";




function DisplayAboutFun(props) {
  const [wpOpen, setWpOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [address, setAddress] = useState(false);
  const [basic, setBasic] = useState(false);
  const [relation, setRelation] = useState(false);
  const [family, setFamily] = useState(false);
  const [about] = useState(props.store.aboutInfo);

  const openWP = () => {
    setWpOpen(true)
  }
  const closeWP = () => {
    setWpOpen(false)
  }
  const openSchool = () => {
    setSchoolOpen(true)
  }
  const closeSchool = () => {
    setSchoolOpen(false)
  }
  const openCollege = () => {
    setCollegeOpen(true)
  }
  const closeCollege = () => {
    setCollegeOpen(false)
  }

  const openBasic = () => {
    setBasic(true)
  }
  const closeBasic = () => {
    setBasic(false)
  }
  const openAddress = () => {
    setAddress(true)
  }
  const closeAddress = () => {
    setAddress(false)
  }
  const openRelation = () => {
    setRelation(true)
  }
  const closeRelation = () => {
    setRelation(false)
  }
  const openFamily = () => {
    setFamily(true)
  }
  const closeFamily = () => {
    setFamily(false)
  }
  const [staticInfo, setStaticInfo] = useState([
    {
      name: 'Add WorkPlace',
      open: openWP
    },
    {
      name: 'Add School',
      open: openSchool
    },
    {
      name: 'Add College',
      open: openCollege
    },
    {
      name: 'Add basic info',
      open: openBasic
    },
    {
      name: 'Add Address',
      open: openAddress
    },
    {
      name: 'Add Relation status',
      open: openRelation
    },
    {
      name: 'Add Family Member',
      open: openFamily
    },

  ]);

  return (
    <div className="display-friends">

      <Container>
        <AddWorkPlace openState={wpOpen} close={closeWP} />
        <AddSchool openState={schoolOpen} close={closeSchool} />
        <BasicInfo openState={basic} close={closeBasic} />
        <AddressInfo openState={address} close={closeAddress} />
        <AddCollege openState={collegeOpen} close={closeCollege} />
        <RelationStatus openState={relation} close={closeRelation} />
        <AddFamilyMember openState={family} close={closeFamily} />
        <Grid container spacing={3}>

          <Grid className="col1" item xs={12} sm={4} lg={3} xl={2} md={3}>
            <div className="about-card">
              
            {about[0].data && <div>
                <br/>
                <br/>
                <ul className="display-ul">
                  <li>
                    <p className="label">Workplace</p>
                    <p className="data-desc">{about[0].value}</p>
                  </li>
                 
                </ul>
              </div>}
              {!about[0].data &&
              <div className="add-div" onClick={openWP}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add WorkPlace
                    </p>
              </div>
                }
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>

          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
              
            { about[2].data && <div>
                <br/>
                <br/>
                <ul className="display-ul">
                  <li>
                    <p className="label">School</p>
                    <p className="data-desc">{about[2].value}</p>
                  </li>
                 
                </ul>
              </div>}
              { !about[2].data &&
              <div className="add-div" onClick={openSchool}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add <br/> School
                    </p>
              </div>}
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
            { about[1].data && <div>
                <br/>
                <br/>
                <ul className="display-ul">
                  <li>
                    <p className="label">College</p>
                    <p className="data-desc">{about[1].value}</p>
                  </li>
                 
                </ul>
              </div>}
              { !about[1].data && 
              <div className="add-div" onClick={openCollege}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add College
                    </p>
              </div>}
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
            {about[3].data && <div>
                <ul className="display-ul">
                  <li>
                    <p className="label">Phone</p>
                    <p className="data-desc">{about[3].value.phone}</p>
                  </li>
                  <li>
                    <p className="label">Email</p>
                    <p className="data-desc">{about[3].value.email}</p>
                  </li>
                  <li>
                    <p className="label">Languages</p>
                    <p className="data-desc">{about[3].value.languages.map((val,ind)=>{
                      return val+", "
                    })}</p>
                  </li>
                  <li>
                    <p className="label">Date of Birth</p>
                    <p className="data-desc">{about[3].value.dateOfBirth.toDateString()}</p>
                  </li>
                </ul>
              </div>}
              { !about[3].data &&
              <div className="add-div" onClick={openBasic}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add Basic Info
                    </p>
              </div>
              }
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
              {about[4].data && <div>
                <ul className="display-ul">
                  <li>
                    <p className="label">Country</p>
                    <p className="data-desc">{about[4].value.country}</p>
                  </li>
                  <li>
                    <p className="label">Division</p>
                    <p className="data-desc">{about[4].value.division}</p>
                  </li>
                  <li>
                    <p className="label">City</p>
                    <p className="data-desc">{about[4].value.city}</p>
                  </li>
                  <li>
                    <p className="label">Address</p>
                    <p className="data-desc">{about[4].value.address}</p>
                  </li>
                </ul>
              </div>}
              {!about[4].data &&
              <div className="add-div" onClick={openAddress}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add Address
                    </p>
              </div>
              }
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
            { about[5].data && <div>
                <br/>
                <br/>
                <ul className="display-ul">
                  <li>
                    <p className="label">Relationship Status</p>
                    <p className="data-desc">{about[5].value}</p>
                  </li>
                </ul>
              </div>}
              { !about[5].data && 
              <div className="add-div" onClick={openRelation}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add Relationship status
                    </p>
              </div>}
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={4} lg={3} md={3}>
            <div className="about-card">
            { about[6].data && <div>
                <br/>
                <br/>
                <ul className="display-ul">
                  <li>
                    <p className="label">Family Members</p>
                    <p className="data-desc">
                      {about[6].value.map((value,index)=>{
                        return <p>{value.name}{":_"} {value.relation} <br/></p>
                      })}
                    </p>
                  </li>
                </ul>
              </div>}
              { !about[6].data &&
              <div className="add-div" onClick={openFamily}>
                <div className="about_card_a1">
                  <i className="fas fa-plus about_plus_font_a2"></i>
                </div>
                <p className="about_heading_p1">Add Family Member
                    </p>
              </div>}
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>

        </Grid>
        {console.log(props.store)

        }
      </Container>
    </div>
  )
}
const mapStateToProps = (store) => {
  return { store: store }
}
export default connect(mapStateToProps)(DisplayAboutFun);



function PrivacyButton() {


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
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {privacy==="Public" &&
          <PublicIcon />
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
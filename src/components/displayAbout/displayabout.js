import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./displayaboutStyle.css";
import AddWorkPlace from "../addInfo/addWorkplace/addWorkPlace";
import AddCollege from "../addInfo/addCollege/addCollege";
import AddPhone from "../addInfo/addYour/AddPhone";
import RelationStatus from "../addInfo/addYour/relationStatus";
import AddFamilyMember from "../addInfo/addYour/addFamilyMember";
import AddSchool from "../addInfo/addSchool/addSchool";
import AddCountry from '../addInfo/addYour/addCountry';
import AddCity from '../addInfo/addYour/addCity';
import AddAddress from '../addInfo/addYour/addAddress';
import AddPostal from '../addInfo/addYour/addPostal';
import PrivacyButton from "./privacyOptions";
import { connect } from "react-redux";
import AddLanguages from "../addInfo/addYour/addLanguages";
import AddDateOfBirth from "../addInfo/addYour/addDateOfBirth";
import AddEmail from "../addInfo/addYour/AddEmail";
import EditButton from "./editOptions";
import DeleteInfo from "../addInfo/DeleteModal/deleteInfo";


function DisplayAboutFun(props) {
  const [wpOpen, setWpOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [country, setCountry] = useState(false);
  const [postal, setPostal] = useState(false);
  const [city, setCity] = useState(false);
  const [address, setAddress] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [languages, setLanguages] = useState(false);
  const [dob, setDob] = useState(false);
  const [relation, setRelation] = useState(false);
  const [family, setFamily] = useState(false);
  const [about] = useState(props.store.aboutInfo);
  const [edit, setEdit] =useState(false);
  const [del, setDel]=useState(false);
  const [delIndex, setDelIndex]=useState(false);
  const openDel = () => {
    setDel(true);
  };
  const closeDel = () => {
    setDel(false);
  };
  const openWP = () => {
    setWpOpen(true);
  };
  const closeWP = () => {
    setWpOpen(false);
  };
  const openSchool = () => {
    setSchoolOpen(true);
  };
  const closeSchool = () => {
    setSchoolOpen(false);
  };
  const openCollege = () => {
    setCollegeOpen(true);
  };
  const closeCollege = () => {
    setCollegeOpen(false);
  };
  const openPhone = () => {
    setPhone(true);
  };
  const closePhone = () => {
    setPhone(false);
  };
  const openEmail = () => {
    setEmail(true);
  };
  const closeEmail = () => {
    setEmail(false);
  };
  const openLanguages = () => {
    setLanguages(true);
  };
  const closeLanguages = () => {
    setLanguages(false);
  };
  const openDOB = () => {
    setDob(true);
  };
  const closeDOB = () => {
    setDob(false);
  };
  const openCountry = () => {
    setCountry(true);
  };
  const closeCountry = () => {
    setCountry(false);
  };
  const openPostal = () => {
    setPostal(true);
  };
  const closePostal = () => {
    setPostal(false);
  };
  const openCity = () => {
    setCity(true);
  };
  const closeCity = () => {
    setCity(false);
  };
  const openAddress = () => {
    setAddress(true);
  };
  const closeAddress = () => {
    setAddress(false);
  };
  const openRelation = () => {
    setRelation(true);
  };
  const closeRelation = () => {
    setRelation(false);
  };
  const openFamily = () => {
    setFamily(true);
  };
  const closeFamily = () => {
    setFamily(false);
  };

  return (
    <div className="display-about">
      <Container>
        <DeleteInfo del={edit} delIndex={delIndex } setEdit={setEdit} openState={del} close={closeDel} />
        <AddWorkPlace openState={wpOpen} close={closeWP} />
        <AddSchool openState={schoolOpen} close={closeSchool} />
        <AddCollege   openState={collegeOpen} close={closeCollege} />
        <AddPhone  openState={phone} close={closePhone} />
        <AddEmail  openState={email} close={closeEmail} />
        <AddLanguages  openState={languages} close={closeLanguages} />
        <AddDateOfBirth  openState={dob} close={closeDOB} />
        <AddCountry  openState={country} close={closeCountry} />
        <AddCity  openState={city} close={closeCity} />
        <AddPostal  openState={postal} close={closePostal} />
        <AddAddress  openState={address} close={closeAddress} />
        <RelationStatus  openState={relation} close={closeRelation} />
        <AddFamilyMember  openState={family} close={closeFamily} />

        <Grid container spacing={3}>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[0].data && (
                <div>
                  <br />
                  <ul className="display-ul">
                    <li>
                      <p className="label">Workplace</p>
                      <p className="data-desc">{about[0].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[0].data && (
                <div className="add-div" onClick={openWP}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add WorkPlace</p>
                </div>
              )}
              {about[0].data && 
              <EditButton openEdit={openWP} setDelIndex={setDelIndex} index={0} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"workplace"} />
            </div>
          </Grid>

          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[2].data && (
                <div>
                  <br />

                  <ul className="display-ul">
                    <li>
                      <p className="label">School</p>
                      <p className="data-desc">{about[2].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[2].data && (
                <div className="add-div" onClick={openSchool}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">
                    Add <br /> School
                  </p>
                </div>
              )}
              {about[2].data && 
              <EditButton openEdit={openSchool} setDelIndex={setDelIndex} index={2} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"school"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[1].data && (
                <div>
                  <br />

                  <ul className="display-ul">
                    <li>
                      <p className="label">College</p>
                      <p className="data-desc">{about[1].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[1].data && (
                <div className="add-div" onClick={openCollege}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add College</p>
                </div>
              )}
              {about[1].data && 
              <EditButton openEdit={openCollege} setDelIndex={setDelIndex} index={1} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"college"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[3].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Phone</p>
                      <p className="data-desc">{about[3].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[3].data && (
                <div className="add-div" onClick={openPhone}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111 ">Add Phone Number</p>
                </div>
              )}
              {about[3].data && 
              <EditButton openEdit={openPhone} setDelIndex={setDelIndex} index={3} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"phone"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[4].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Email</p>
                      <p className="data-desc">{about[4].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[4].data && (
                <div className="add-div" onClick={openEmail}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">
                    Add
                    <br />
                    Email
                  </p>
                </div>
              )}
              {about[4].data && 
              <EditButton openEdit={openEmail} setDelIndex={setDelIndex} index={4} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"Email"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[5].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Languages</p>
                      <p className="data-desc">{about[5].value.map((language,index)=>{
                        return language +", " 
                      })}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[5].data && (
                <div className="add-div" onClick={openLanguages}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">
                    Add
                    <br />
                    languages
                  </p>
                </div>
              )}
              {about[5].data && 
              <EditButton openEdit={openLanguages} setDelIndex={setDelIndex} index={5} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"languages"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[6].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Date of Birth</p>
                      <p className="data-desc">{about[6].value.toDateString()}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[6].data && (
                <div className="add-div" onClick={openDOB}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111 ">
                    Add
                    <br />
                    Date of Birth
                  </p>
                </div>
              )}
              {about[6].data && 
              <EditButton openEdit={openDOB} setDelIndex={setDelIndex} index={6} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"dateOfBirth"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[7].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Country</p>
                      <p className="data-desc">{about[7].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[7].data && (
                <div className="add-div" onClick={openCountry}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add Country</p>
                </div>
              )}
              {about[7].data && 
              <EditButton openEdit={openCountry} setDelIndex={setDelIndex} index={7} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"country"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[8].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">City</p>
                      <p className="data-desc">{about[8].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[8].data && (
                <div className="add-div" onClick={openCity}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add<br/> City</p>
                </div>
              )}
              {about[8].data && 
              <EditButton openEdit={openCity} setDelIndex={setDelIndex} index={8} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"city"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[9].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Postal Code</p>
                      <p className="data-desc">{about[9].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[9].data && (
                <div className="add-div" onClick={openPostal}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add Postal Code</p>
                </div>
              )}
              {about[9].data && 
              <EditButton openEdit={openPostal} setDelIndex={setDelIndex} index={9} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"postalCode"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[10].data && (
                <div>
                  <br/>
                  <ul className="display-ul">
                    <li>
                      <p className="label">Address</p>
                      <p className="data-desc">{about[10].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[10].data && (
                <div className="add-div" onClick={openAddress}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111">Add<br/>Address</p>
                </div>
              )}
              {about[10].data && 
              <EditButton openEdit={openAddress} setDelIndex={setDelIndex} index={10} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"address"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[11].data && (
                <div>
                  <br />
                  <ul className="display-ul">
                    <li>
                      <p className="label">Relationship Status</p>
                      <p className="data-desc">{about[11].value}</p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[11].data && (
                <div className="add-div" onClick={openRelation}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111 d3lp">
                    Add Relationship status
                  </p>
                </div>
              )}
              {about[11].data && 
              <EditButton openEdit={openRelation} setDelIndex={setDelIndex} index={11} openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"relationStatus"} />
            </div>
          </Grid>
          <Grid className="col1" item xs={12} sm={3} lg={3} xl={3} md={3}>
            <div className="about-card">
              {about[12].data && (
                <div>
                  <br />
                  <ul className="display-ul">
                    <li>
                      <p className="label">Family Members</p>
                      <p className="data-desc">
                        {about[12].value.map((value, index) => {
                          return (
                            <p>
                              {value.name}
                              {":_"} {value.relation} <br />
                            </p>
                          );
                        })}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {!about[12].data && (
                <div className="add-div" onClick={openFamily}>
                  <div className="about_card_a1">
                    <i className="fas fa-plus about_plus_font_a2"></i>
                  </div>
                  <p className="about_heading_p111 ">Add Family Member</p>
                </div>
              )}
              {about[12].data && 
              <EditButton openEdit={openFamily} setDelIndex={setDelIndex} index={12}  openDel={openDel} flag={"workplace"}/>
              }
              <PrivacyButton flag={"familyMember"} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
const mapStateToProps = store => {
  return { store: store };
};
export default connect(mapStateToProps)(DisplayAboutFun);


import React,{useState} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import './videosStyle.css';
import {connect} from 'react-redux';
import VideoHeader from '../header/videoHeader' 
import AddCaption from './videoModal'; 
import PrivacyButton from './privacyOptions' 
let Videos = (props) => {
    const [modal,setmodal]=useState(false);
    
    let addAudioHandler=()=>{
    setmodal(true);
        
           }
       
        let closeModall =()=>{

            setmodal(false)
        }

    return (
        <div className="display-videos">
            <VideoHeader/>
            <AddCaption openmodal={modal} closeModal={closeModall} />
           
            <Container>
                
                <Grid container spacing={3}>
                {props.video.map((audioUrll,index)=>{
                    return( 
                        <Grid key={index}  className="col1" item xs={12} sm={4} lg={3} xl={3} md={3}>
                        <div className="video-card">
                            <div >
                               <video controls className="video-control-user-a3" >
                                 <source src={audioUrll.videoUrl} type="video/mp4"/>

                               </video>
                              <div className="caption-div-a6">

                                <p className="caption-tag-video-a4">{audioUrll.caption}</p>
                              </div>
                              <p style={{paddingLeft:'7px'}}>{new Date().toDateString()}</p>

                              <PrivacyButton index={index} videoid={audioUrll.id} flag={"Video"}/>
                            </div>
                            
                        </div>
                       
                        </Grid>
                    )
                 })}
                   

                    <Grid className="col1" item xs={12} sm={4} lg={3} xl={3} md={3}>
                        <div onClick={addAudioHandler} className="video-card">
                            <div className="add-audio">
                                <i className="fas fa-plus add-audio-font"></i>
                            </div>
                        </div>
                    

                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
let mapStateToProps = (store)=>{
    return{
        video :store.videoReducer
    }
}
export default connect(mapStateToProps)(Videos);
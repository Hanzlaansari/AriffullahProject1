import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import "./videosStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import { addVideo } from '../actions/action'
const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        "& > *": {
            margin: theme.spacing(1),
            width: 200
        }
    },

    formControl: {
        margin: theme.spacing(1)
    }
}));

function AddCaption(props) {
    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [error, setError] = useState(false);
    const [select, setSelected] = useState(false);
    const [selectbtn, setselectbtn] = useState(true);
    const [videoo, setVideo] = useState(false);
    const [url, setUrl] = useState(false)
    const [videoData, setVideoData] = useState("");
   
    let save = () => {

        if (name && url == true) {
            let videoId =Math.random().toString();
            
            props.dispatch(addVideo({ videoUrl: videoData, caption: name,id: videoId}))
            // after dispatch

            setName("");
            setUrl(false);
            setError(false);
            setselectbtn(true);
            setVideo(false)
            props.closeModal();
        } else setError(true);
    };
    let closeError = () => {
        setError(false);
    };
    const handleChange = event => {
        setName(event.target.value);
        closeError();
    };
    let selectVideo = () => {
        document.querySelector(".file").click();
    }
    let changeHamdler = () => {

        var file = document.querySelector('input[type=file]').files[0];


        var reader = new FileReader();

        reader.addEventListener("load", function () {
            setSelected(false);
            setUrl(true);
            setselectbtn(false);
            setError(false);
            let data = reader.result
            setVideoData(data)
            setVideo(true);
            document.getElementById("src").src = data;
        }, false);

        if (file) {
            setSelected(true);
            reader.readAsDataURL(file);

        }
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openmodal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={props.openmodal}>
                    <div className={"about-yourself " + classes.paper}>
                        <h2 style={{ marginBottom: '20px' }} id="transition-modal-title">Add Your video</h2>
                        {selectbtn ? (
                            <Button
                                onClick={selectVideo}
                                className="addworkplace_submit"
                                variant="contained"
                                color="primary"
                            >
                                Select Video
             </Button>
                        ) : ("")}

                        <input type="file" id="video" onChange={changeHamdler} name="videofile" className="file" accept=".mp4" style={{ display: 'none' }} />
                        {videoo == true ? (
                            <video controls className="video-control-user-a3" >
                                <source id="src" src="" type="video/mp4" />

                            </video>

                        ) : ("")}
                        {/* spinner start */}
                        {select == true ? (
                            <div style={{ margin: '0 auto' }} className={classes.root}>
                                <CircularProgress />
                                <br />
                                <p>Uploading,Please Wait...</p>
                            </div>

                        ) : ("")}


                        {/* spinner end...... */}


                        <FormControl className="input-control" fullWidth>
                            <TextField
                                onChange={handleChange}
                                id="standard-basic"
                                label="Your Caption"
                            />
                            {error ? (
                                <FormHelperText
                                    style={{ color: "red" }}
                                    id="component-helper-text"
                                >
                                    All fields are required
</FormHelperText>
                            ) : (
                                    ""
                                )}
                        </FormControl>


                        <div>

                            <Button
                                onClick={save}
                                className="addworkplace_submit"
                                variant="contained"
                                color="primary"
                            >
                                Add
          </Button>

                            <Button onClick={() => { props.closeModal(); setError(false); setselectbtn(true); setVideo(false) }} variant="contained">
                                Cancel
              </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
const mapStateToProps = (store) => {
    return { video: store.videoReducer }
}
export default connect(mapStateToProps)(AddCaption);
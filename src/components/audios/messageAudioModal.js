import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./videosStyle.css";
import { connect } from 'react-redux'
import {deleteAudio} from '../actions/action'
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

function MessageAudioModal(props) {
    const classes = useStyles();
    
  let save=()=>{
    props.dispatch(deleteAudio(props.id))
    props.closemodal();
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
                        <h2 style={{ marginBottom: '20px' }} id="transition-modal-title">Are you sure you want to delete</h2>
                    
                        <div>

                            <Button
                                onClick={save}
                                className="addworkplace_submit"
                                variant="contained"
                                color="primary"
                            >
                                Delete
          </Button>

                            <Button onClick={() => { props.closemodal(); }} variant="contained">
                                Cancel
              </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
// const mapStateToProps = (store) => {
//     return { videoData: store.audioReducer }
// }
export default connect(null,null)(MessageAudioModal);
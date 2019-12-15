import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import './deleteInfo.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import {delInfo} from '../../actions/action'
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },

    formControl: {
        margin: theme.spacing(1),
    },
}));


function DeleteInfo(props) {
    const classes = useStyles();
    let del = () => {
        props.dispatch(delInfo(props.delIndex))
        props.close()
        console.log("hi")

    }
    return (

        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openState}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openState}>
                    <div className={"about-yourself " + classes.paper}>
                    <h2 style={{ marginBottom: '20px' }} id="transition-modal-title">Are you sure you want to delete</h2>
                        <div>
                            <Button onClick={del} className="deleteInfo" variant="contained" color="primary">
                                Delete
                         </Button>
                            <Button onClick={()=>{props.close();}}   variant="contained">Cancel</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>

    )
}
const mapStateToProps = (store) => {
    return { about: store }
}
export default connect(mapStateToProps)(DeleteInfo);
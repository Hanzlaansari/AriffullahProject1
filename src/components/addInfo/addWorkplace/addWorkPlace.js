import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import './WorkPlaceStyle.css'
import FormHelperText from '@material-ui/core/FormHelperText';
import {workplace} from '../../actions/action'
import {connect} from "react-redux"
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


function AddWorkPlace(props) {
    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [error, setError] = useState(false);
//       const closeModal = () => {
//         setCollapse(false)
//         setName("")
// setError(false);
//       }
      let save = () => {
        if (name) {
            props.dispatch(workplace(name));
            setName("");
            props.close();
        }
        else
          setError(true);
    
      }
      let closeError = () => {
        setError(false);
      }
      const handleChange = event => {
        setName(event.target.value);
        console.log(event.target.value)
        closeError();
      };
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
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Add Your WorkPlace</h2>
                        <FormControl className={classes.formControl}>

                            <TextField onChange={handleChange} 

                            id="standard-basic" 
                            defaultValue={
                                props.about[0].data? props.about[0].value:""
                            }
                            label="Your Workplace" />
                            {error ?
                            <FormHelperText style={{color:'red'}} id="component-helper-text">Please Enter the workplace</FormHelperText>
                            :""
                            }
                            </FormControl>
                        <div>
                        <Button onClick={save} className="addworkplace_submit" variant="contained" color="primary">
                           Add 
                         </Button>  
                         <Button onClick={()=>{props.close(); setError(false); }} variant="contained">Cancel</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>




    )
}

const mapStateToProps=(store)=>{
    return {about:store.aboutInfo}
}
export default connect(mapStateToProps)(AddWorkPlace)
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import './addSchoolStyle.css'
import FormHelperText from '@material-ui/core/FormHelperText';
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


export default function AddSchool() {
    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [collapse, setCollapse] = useState(false);
    const [error, setError] = useState(false);
    const openModal = () => {
        setCollapse(true)
      }
      const closeModal = () => {
        setCollapse(false)
        setName("")
setError(false);
      }
      let save = () => {
    let value=name;
        if (value) {
// after dispatch

          closeModal();
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
            <button type="button" onClick={openModal}>
                react-transition-group
      </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={collapse}
                onClose={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={collapse}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Add Your School</h2>
                        <FormControl className={classes.formControl}>

                            <TextField onChange={handleChange} id="standard-basic" label="Your School" />
                            {error ?
                            <FormHelperText style={{color:'red'}} id="component-helper-text">Please Enter the School</FormHelperText>
                            :""
            }
                            </FormControl>
                        <div>
                        <Button onClick={save} className="addworkplace_submit" variant="contained" color="primary">
                           Add 
                         </Button>  
                         <Button onClick={closeModal} variant="contained">Cancel</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>




    )
}

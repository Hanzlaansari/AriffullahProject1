import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./addYourStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux"
import {addLanguage} from '../../actions/action'
import SelectLanguage from "./language";
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
		"& > *": {
			margin: theme.spacing(1),
			width: 200
		}
	},
	root1: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},

	formControl: {
		margin: theme.spacing(1)
	}
}));

function AddLanguages(props) {
	
	const classes = useStyles();
	const [languages, setLanguages] = React.useState([]);
	const [error, setError] = useState(false);
	
	if(props.edit) 
	setLanguages(props.about[5].value) ;

	let save = () => {
		if(languages.length!==0){
			// const object= { phone, email, languages, dateOfBirth:selectedDate };
			props.dispatch(addLanguage(languages))
			setLanguages([]);
			props.close();
			
		}
		 else
		  setError(true);
	};
	let closeError = () => {
		setError(false);
	};
	const handleLanguages=(value)=>{
		setLanguages(value)
	}
	
	return (
		<div className="about-yourself-main">
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={"custom-modal " + classes.modal}
				open={props.openState}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={props.openState}>
					<div className={"about-yourself "+classes.paper}>
						<div className={classes.root1}>
							<Grid container spacing={0}>
								<Grid item xs={12} md={12} lg={12} xl={5} className="about-modal-main">
									<SelectLanguage setLanguages={handleLanguages} classes="input-control" />
									{error ? (
											<FormHelperText
												style={{ color: "red" }}
												id="component-helper-text"
											>
												Please fill All field
                        </FormHelperText>
										) : (
												""
											)}
									<br/>
									<Button
										onClick={save}
										className="addworkplace_submit"
										variant="contained"
										color="primary"
									>
										Save
								  </Button>
									<Button onClick={()=>{props.close(); closeError()}} variant="contained">
										Cancel
                    </Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
const mapStateToProps=(store)=>{
	return {about:store.aboutInfo}
}
export default connect(mapStateToProps)(AddLanguages);
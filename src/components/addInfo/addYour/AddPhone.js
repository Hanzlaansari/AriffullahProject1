import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import "./addYourStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux"
import {addPhone} from '../../actions/action'
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

function AddPhone(props) {
	
	const classes = useStyles();
	const [phone, setPhone] = React.useState("");
	const [error, setError] = useState(false);
	
	let save = () => {
		if(phone){
			props.dispatch(addPhone(phone))
			setPhone("");
			props.close();
			
		}
		 else
		  setError(true);
	};
	let closeError = () => {
		setError(false);
	};
	const handlePhone = event => {
		setPhone(event.target.value);
		// console.log(event.target.value);
		closeError();
	};

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
									<FormControl className="input-control" fullWidth >
										<TextField
											type="number"
											onChange={handlePhone}
											id="standard-basic"
											defaultValue={
												props.about[3].data? props.about[3].value:""
										}
											placeholder="Mobile phone"
											label="Mobile phone"
										/>
										{error ? (
											<FormHelperText
												style={{ color: "red" }}
												id="component-helper-text"
											>
												Please fill the field
                        </FormHelperText>
										) : (
												""
											)}
									</FormControl>

									<br/>
									<Button
										onClick={save}
										className="addworkplace_submit"
										variant="contained"
										color="primary"
									>
										Save
                    </Button>
									<Button onClick={()=>{props.close(); setError(false)}} variant="contained">
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
export default connect(mapStateToProps)(AddPhone);
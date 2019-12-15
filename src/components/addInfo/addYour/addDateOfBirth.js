import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./addYourStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {connect} from "react-redux"
import {addDateOfBirth} from '../../actions/action'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";


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

function AddDateOfBirth(props) {

	const classes = useStyles();
	const [error, setError] = useState(false);
	const [dateState, setDateState]=useState(false)	
	const [selectedDate, setSelectedDate] = useState(
		new Date()
	);
	const handleDateChange = date => {
		setSelectedDate(date);
		closeError();
		setDateState(true);
	};

	let save = () => {
		if( dateState){
			
			props.dispatch(addDateOfBirth(selectedDate))
			setDateState(false);
			props.close();
		}
		 else
		  setError(true);
	};
	let closeError = () => {
		setError(false);
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
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<KeyboardDatePicker
											margin="normal"
											id="date-picker-dialog"
											label="Date of Birth"
											format="MM/dd/yyyy"
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												"aria-label": "change date"
											}}
										/>
									</MuiPickersUtilsProvider>
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
export default connect(mapStateToProps)(AddDateOfBirth);
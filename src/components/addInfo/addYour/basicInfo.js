import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./addYourStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {connect} from "react-redux"
import {basicInfo} from '../../actions/action'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
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

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function BasicInfo(props) {
	
	const classes = useStyles();
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [languages, setLanguages] = React.useState([]);
	const [error, setError] = useState(false);
	const [dateState, setDateState]=useState(false)	
	const [selectedDate, setSelectedDate] = useState(
		new Date("2014-08-18T21:11:54")
	);
	const handleDateChange = date => {
		setSelectedDate(date);
		closeError();
		setDateState(true);
	};

	let save = () => {
		if(email && phone && languages.length!==0 && dateState){
			const object= { phone, email, languages, dateOfBirth:selectedDate };
			props.dispatch(basicInfo(object))
			setDateState(false);
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
	const handlePhone = event => {
		setPhone(event.target.value);
		// console.log(event.target.value);
		closeError();
	};
	const handleEmail = event => {
		setEmail(event.target.value);
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
											placeholder="Mobile phone"
											label="Mobile phone"
										/>
										{/* {error ? (
											<FormHelperText
												style={{ color: "red" }}
												id="component-helper-text"
											>
												Please fill the field
                        </FormHelperText>
										) : (
												""
											)} */}
									</FormControl>

									<FormControl className="input-control" fullWidth>
										<TextField
											type="email"
											onChange={handleEmail}
											id="standard-basic"
											placeholder="email"
											label="Email"
										/>
										{/* {error ? (
											<FormHelperText
												style={{ color: "red" }}
												id="component-helper-text"
											>
												Please fill the field
                        </FormHelperText>
										) : (
												""
											)} */}
									</FormControl >
								
									<SelectLanguage setLanguages={handleLanguages} classes={"input-control "} />
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
	return {about:store}
}
export default connect(mapStateToProps)(BasicInfo);
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
import Country from "./stateInfo/stateInfo";
import {addressAction} from '../../actions/action';
import {connect } from 'react-redux'

// import SelectLanguage from "./language";
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


function AddressInfo(props) {
	const [country, setCountry] = React.useState("");
	const [division, setDivision] = React.useState("");
	const [city, setCity] = React.useState("");
	const [address, setAddress] = React.useState("");
	const classes = useStyles();
	const [error, setError] = useState(false);
	
	let save = () => {
		
		if (country && division && city && address ) {
			const object={country, division, city, address}
			props.dispatch(addressAction(object));
			setCountry("");
			setDivision("");
			setCity("")
			setAddress("");
			props.close();
		} else setError(true);
	};
	let closeError = () => {
		setError(false);
	};

	const handleCity = event => {
		setCity(event.target.value);
		closeError();
	};
	const handleDivision = event => {
		setDivision(event.target.value);
		closeError();
	};
	const handleAddress = event => {
		setAddress(event.target.value);
		closeError();
	};

	return (
		
		<div className="about-yourself-main">
		
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={"custom-modal " + classes.modal}
				open={props.openState}
				// onClose={closeModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={props.openState}>
					<div className={"about-yourself "+classes.paper }>
						<div className={classes.root1}>
							<Grid container spacing={0}>
								<Grid item xs={12} md={12} lg={12} xl={12} className="about-modal-main">
								<Country setCountry={setCountry} />
									<FormControl className="input-control" fullWidth>
										<TextField
											type="text"
											onChange={handleDivision}
											id="standard-basic"
											placeholder="Division"
											label="Division"
										/>
											</FormControl>
									<FormControl className="input-control" fullWidth>
										<TextField
											type="text"
											onChange={handleCity}
											id="standard-basic"
											placeholder="City"
											label="City"
										/>
									</FormControl>
									<FormControl className="input-control" fullWidth>
										<TextField
											type="text"
											onChange={handleAddress}
											id="standard-basic"
											placeholder="Address"
											label="Address"
										/>
										{error ? (
											<FormHelperText
												style={{ color: "red" }}
												id="component-helper-text"
											>
												Please fill all fields then save.
                        </FormHelperText>
										) : (
												""
											)}
									</FormControl>

									<Button
										onClick={save}
										className="addworkplace_submit"
										variant="contained"
										color="primary"
									>
										Save
                    </Button>
									<Button onClick={()=>{props.close(); closeError();}} variant="contained">
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
export default connect(mapStateToProps)(AddressInfo);
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./addYourStyle.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import {familyMember} from "../../actions/action" 
import {connect}	from "react-redux";
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

function AddFamilyMember(props) {

	const classes = useStyles();
	const [name, setName] = React.useState("");
	const [error, setError] = useState(false);
	const [state, setState] = React.useState({
		relation: "Brother"
	});
	let save = () => {

		if (name) {
			const object={name, relation:state.relation}
			props.dispatch(familyMember(object));
			setState({ relation: "Brother" })
			setName("")
			props.close();
		} else setError(true);
	};
	let closeError = () => {
		setError(false);
	};

	const handleName = event => {
		setName(event.target.value);
		closeError();
	};
	const handleRelationship = name => event => {
		setState({
			...state,
			[name]: event.target.value
		});
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
					<div className={"about-yourself " + classes.paper}>
						<div className={classes.root1}>
							<Grid container spacing={1}>
								<Grid item xs={12} xl={12} lg={12}>
									<FormControl className="input-control" fullWidth >
										<TextField
											onChange={handleName}
											id="standard-basic"
											label="Family Member"
											placeholder="name"
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
								</Grid>
								<Grid item xs={12} xl={12} lg={12}>
									<FormControl className="input-control" fullWidth>
										<InputLabel htmlFor="uncontrolled-native">
											Chose Relationship
                        </InputLabel>
										<NativeSelect
											onChange={handleRelationship("relation")}
											defaultValue={"Brother"}
											inputProps={{
												name: "relation",
												id: "uncontrolled-native"
											}}
										>
											<option value="" />
											<option value="Brother">Brother</option>
											<option value="Sister">Sister</option>
											<option value="Mother">Mother</option>
											<option value="Father">Father</option>
											<option value="Son">Son</option>
											<option value="Daughter">Daughter</option>
											<option value="Husband">Husband</option>
											<option value="Wife">Wife</option>
										</NativeSelect>
									</FormControl>
								</Grid>
							</Grid>
							<Button
								onClick={save}
								className="addworkplace_submit"
								variant="contained"
								color="primary"
							>
								Save
              </Button>
							<Button onClick={() => { props.close(); closeError(); }} variant="contained">
								Cancel
              </Button>

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
export default connect(mapStateToProps)(AddFamilyMember);
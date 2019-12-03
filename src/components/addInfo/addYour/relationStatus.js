import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Grid from "@material-ui/core/Grid";
import "./addYourStyle.css";
import {connect} from "react-redux";
import {relationStatus} from '../../actions/action'
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


function RelationStatus(props) {
	const classes = useStyles();
	const [error, setError] = useState(false);
	const [state, setState] = React.useState({
		relation: "Single",
		// name: "hai"
	});
	
	let save = () => {
		
		if (state.relation) {
			props.dispatch(relationStatus(state.relation))
			setState({relation:"Single"})
			props.close();
		} else setError(true);
	};
	let closeError = () => {
		setError(false);
	};
	const handleRelationship = name => event => {
		setState({
			...state,
			[name]: event.target.value
		});
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
					<div className={"about-yourself "+classes.paper}>
						<div className={classes.root1}>
							<Grid container spacing={0}>
								<Grid item xs={12} md={12} lg={12} xl={12} className="about-modal-main">
									
									<FormControl className="input-control" fullWidth>
										<InputLabel htmlFor="uncontrolled-native">
											Relationship Status
                      </InputLabel>
										<NativeSelect
											onChange={handleRelationship("relation")}
											defaultValue={"Single"}
											inputProps={{
												name: "relation",
												id: "uncontrolled-native"
											}}
										>
											<option value="" />
											<option value="Single">Single</option>
											<option value="In a relation ship">
												In a relation ship
                        </option>
											<option value="Engaged">Engaged</option>
											<option value="Married">Married</option>
											<option value="Married">Married</option>
											<option value="Its Complicated">Its Complicated</option>
											<option value="Separated">Separated</option>
											<option value="Divorced">Divorced</option>
											<option value="Widowed">Widowed</option>
										</NativeSelect>
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
export default connect(mapStateToProps)(RelationStatus);
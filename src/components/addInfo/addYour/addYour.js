import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './addYourStyle.css'
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import IntegrationDownshift from './stateInfo/stateInfo' 
import SelectLanguage from './language'
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
	root1: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},

	formControl: {
		margin: theme.spacing(1),
	},
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
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function AddYour(props) {
	const [value, setValue] = React.useState(0);

	const handleTabs = (event, newValue) => {
		setValue(newValue);
	};

	const classes = useStyles();
	const [name, setName] = React.useState("");
	const [relationshipStatus, setRelationshipStatus] = React.useState('');
	const [collapse, setCollapse] = useState(false);
	const [error, setError] = useState(false);
	const [state, setState] = React.useState({
		relation: '',
		name: 'hai',
	});
	const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
	const handleDateChange = date => {
		setSelectedDate(date);
	};

	const openModal = () => {
		setCollapse(true)
	}
	const closeModal = () => {
		setCollapse(false)
		setName("")
		setError(false);
	}
	let save = () => {
		let value = name;
		if (value) {

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
	const handleRelationship = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});

	};
	return (

		<div className="about-yourself-main">
			{console.log(state)}
			<button type="button" onClick={openModal}>
				react-transition-group
      </button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={collapse}
				// onClose={closeModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={collapse}>

					<div className={"about-yourself " + classes.paper}>
						<div className={classes.root1}>
							<AppBar position="static">
								<Tabs value={value} onChange={handleTabs} aria-label="simple tabs example">
									<Tab label="Contact and Basic Info" {...a11yProps(0)} />
									<Tab label="Family and Relationship" {...a11yProps(1)} />
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<FormControl fullWidth >
									<TextField type="number" onChange={handleChange} id="standard-basic" placeholder="Mobile phone" label="Mobile phone" />
									{error ?
										<FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
										: ""}
								</FormControl>
								<FormControl fullWidth >
									<TextField type="email" onChange={handleChange} id="standard-basic" placeholder="Mobile phone" label="Email" />
									{error ?
										<FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
										: ""}
								</FormControl>
								<SelectLanguage classes={classes} />
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									
									<KeyboardDatePicker
										margin="normal"
										id="date-picker-dialog"
										label="Date picker dialog"
										format="MM/dd/yyyy"
										value={selectedDate}
										onChange={handleDateChange}
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
									/>
								</MuiPickersUtilsProvider>
								<IntegrationDownshift/>
								
								<FormControl fullWidth >
									<TextField type="text" onChange={handleChange} id="standard-basic" placeholder="Mobile phone" label="Division" />
									{error ?
										<FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
										: ""}
								</FormControl>
								<FormControl fullWidth >
									<TextField type="text" onChange={handleChange} id="standard-basic" placeholder="Mobile phone" label="City" />
									{error ?
										<FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
										: ""}
								</FormControl>
								<FormControl fullWidth >
									<TextField type="text" onChange={handleChange} id="standard-basic" placeholder="Mobile phone" label="Address" />
									{error ?
										<FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
										: ""}
								</FormControl>
								


							</TabPanel>
							<TabPanel value={value} index={1}>
								Item Two
              </TabPanel>
						</div>

						{/* <h2 id="transition-modal-title">Add About Yourself</h2>
                        <h4 className="main-legend">Contact and Basic Info</h4>
                        <p className="legend">Relationship Status</p>
                        <Divider/>
                        <Divider/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
                            <NativeSelect
                                onChange={handleRelationship("relation")}
                                defaultValue={30}
                                inputProps={{
                                    name: 'relation',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={30}>Thirty</option>
                                <option value={20}>Twenty</option>
                            </NativeSelect>
                            <FormHelperText>Uncontrolled</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl className={classes.formControl}>

                            <TextField onChange={handleChange} id="standard-basic" label="Add Yourself" />
                            {error ?
                                <FormHelperText style={{ color: 'red' }} id="component-helper-text">Please fill the field</FormHelperText>
                                : ""}
                        </FormControl>
                        <div>
                            <Button onClick={save} className="addworkplace_submit" variant="contained" color="primary">
                                Add
                         </Button>
                            <Button onClick={closeModal} variant="contained">Cancel</Button>
                        </div> */}
					</div>
				</Fade>
			</Modal>
		</div>




	)
}

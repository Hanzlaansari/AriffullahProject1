import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import './audiosStyle.css';
import { connect } from 'react-redux';
import { addAudio } from '../actions/action'
import AudioHeader from '../header/audioHeader';
import { Media, Player, controls } from 'react-media-player';
import $ from "jquery"
import PrivacyAudioButton from './AudioprivacyOptions'
import CustomPlayPause from './playPauseBtn';
import AddAudio from './addAudio'

// import CustomMuteUnmute from './muteUnmuteBtn'
const {
	// PlayPause,
	CurrentTime,
	// Progress,
	SeekBar,
	Duration,
	// MuteUnmute,
	Volume,
} = controls



let Audios = (props) => {
	const [state, setState] = useState(false)
	const [openAM, setOpenAM] = useState(false);
	const [index, setIndex] = useState("");

	function closeAudioM(){
		setOpenAM(false)
	}
	function openAudioM(){
		setOpenAM(true)
	}
	
	let addAudioHandler = () => {
		document.querySelector(".file").click();

	}
	let changeaudioHandler = () => {

		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		reader.addEventListener("load", function () {
			let data = reader.result
			props.dispatch(addAudio({ audiourl: data, id: Math.random().toString() }));
		}, false);

		if (file) {
			reader.readAsDataURL(file);
		}


	}
	return (
		<div className="audio">
			<AddAudio openState={openAM} close={closeAudioM} />
			
			<AudioHeader />
			<Container>
				<input type="file" onChange={changeaudioHandler} id="audio" name="audiofile" className="file" accept="audio/*" style={{ display: 'none' }} />
				<Grid container spacing={3}>
					{props.audios.map((audioUrll, index) => {
						return (
							<Grid unique={index} className="col1" item xs={12} sm={4} lg={3} xl={3} md={3}>
								<div className="about-card">
									{console.log(index)}

									<AudioPlayer  title={audioUrll.title} audio={audioUrll.audiourl} unique={index} state={state} audioState={setState}/>
									<PrivacyAudioButton audioid={audioUrll.id} index={index} />
								</div>
							</Grid>
						)
					})}


					<Grid className="col1" item xs={12} sm={4} lg={3} xl={3} md={3}>
						<div onClick={openAudioM} className="about-card">
							<div className="add-audio">
								<i className="fas fa-plus add-audio-font"></i>
							</div>
						</div>
					</Grid>
					{console.log(props.audios)}
				</Grid>
			</Container>
		</div>
	)
}
let mapStateToProps = (store) => {
	return {
		audios: store.audioReducer
	}
}
export default connect(mapStateToProps)(Audios);




function AudioPlayer(props) {

	const [mute, setMute] = useState(false)
	const [check, setCheck] = useState(false);

	function handleActive(cls, unique) {
		$(".column." + cls + unique).toggleClass("active");
		if (cls === "c1") {
			var audio = document.getElementById("player" + unique);
			const attr = audio.getAttributeNode("loop")
			if (attr) {
				audio.removeAttributeNode(attr);
			}
			else {
				const loop = document.createAttribute("loop");
				audio.setAttributeNode(loop);
			}
		}
	}

	function volumeMute() {
		var audio = document.getElementById('player'+props.unique);
		console.log(audio.volume)
		if (audio.volume === 0) {
			audio.volume = 0.5;
			setMute(false)
		}
		else {
			audio.volume = 0;
			setMute(true)
		}
	}

	return (
		<div>
			<div id="project-container">
				<div id="overlay"></div>
				<div id="content">
	<h2>{props.title}</h2>
					<h3>Bring Me The Horizon</h3>

					<Media>
						<div className="media">
							<div className="media-player">
								<Player id={"player"+props.unique} src={props.audio} vendor={'audio'} />
							</div>
							<div id="controls">
						<div className={"column c1" + props.unique} onClick={() => { handleActive("c1", props.unique) }}><i class="fa fa-refresh" aria-hidden="true"></i></div>
						<div className={"column c2" + props.unique} onClick={() => { handleActive("c2", props.unique) }}><i class="fa fa-random" aria-hidden="true"></i></div>
					</div>
							<div className="controls">
							<CurrentTime />
								<SeekBar className="seekbar" />
								<Duration />
								<CustomPlayPause/>
								{
									mute &&
								<div className="column mb" onClick={volumeMute}><i className="fas fa-volume-mute" aria-hidden="true"></i></div>
								}
								{
									!mute &&
								<div className="column mb" onClick={volumeMute}><i className="fas fa-volume-up" aria-hidden="true"></i></div>
								}
								<Volume className="volume" />
							</div>
						</div>
					</Media>
				</div>
			</div>
		</div>
	);
}
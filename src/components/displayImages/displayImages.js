import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./displayImages.css";


function DisplayImages(){

  function displayImage(index) {
    const img = document.querySelector(".img"+index)
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = img.src;
    expandImg.style.display = "block";
    document.getElementById("display-image").style.display = "block";
  }
  function hideImage(){
    document.querySelector("#closebtn").parentElement.style.display="none";
  }
  return(
    <div className="images-galary">

    <Container>
				<Grid container spacing={2}>
						
							<Grid  className="col1" item xs={6} sm={4} lg={3} xl={3} md={3}>
								<div className="galary-image">
                  <img className="img1" onClick={()=>{displayImage(1)}} src="https://www.w3schools.com/howto/img_lights.jpg" alt="..."/>
                </div>
							</Grid>
              <Grid className="col1" item xs={6} sm={4} lg={3} xl={3} md={3}>
								<div className="galary-image">
                  <img className="img2" onClick={()=>{displayImage(2)}} src="https://www.w3schools.com/howto/img_mountains.jpg" alt="..."/>
                </div>
							</Grid>
              <Grid className="col1" item xs={6} sm={4} lg={3} xl={3} md={3}>
								<div className="galary-image">
                  <img className="img3" onClick={()=>{displayImage(3)}} src="https://www.w3schools.com/howto/img_snow.jpg" alt="..."/>
                </div>
							</Grid>
              <Grid className="col1" item xs={6} sm={4} lg={3} xl={3} md={3}>
								<div className="galary-image">
                  <img className="img4" onClick={()=>{displayImage(4)}} src="https://www.w3schools.com/howto/img_nature.jpg" alt="..."/>
                </div>
							</Grid>
				
				</Grid>
			</Container>
      
      <div class="display-image" id="display-image">
        <span onClick={hideImage} class="closebtn" id="closebtn" >&times;</span>
        <img id="expandedImg" />
        {/* <div id="imgtext"></div> */}
      </div>
    </div>
  );
}
export default DisplayImages;
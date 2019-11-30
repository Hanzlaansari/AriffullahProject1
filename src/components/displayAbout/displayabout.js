import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./displayaboutStyle.css";
export default function DisplayAboutFun() {
 
    const [staticInfo, setStaticInfo] = useState([
      {
        name: 'Add WorkPlace',
       
      },
      {
        name: 'Add School',
       
      },
      {
        name: 'Add College',
    
      },
      {
        name: 'Add Your',
      
      }
    ]);
    

    return (
      <div className="display-friends">

        <Container>
          <Grid container spacing={3}>
            {staticInfo.map((val, index) => {
              return (
                <Grid key={index} className="col1" item xs={9} sm={4} lg={3} md={4}>
                  <div className="about-card">
                    <div  className="about_card_a1">
                      <i className="fas fa-plus about_plus_font_a2"></i>
                    </div>
                    <p className="about_heading_p1">{val.name}
                    </p>
                  </div>
                </Grid>
              )

            })}

          </Grid>

        </Container>
      </div>
    )
  }

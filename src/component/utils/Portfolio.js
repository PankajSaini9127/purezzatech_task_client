import { Box, Typography } from '@mui/material'
import React from 'react';

import bg from "../../assets/images/bikes-image-map-bg.jpg";
import scooter from "../../assets/images/ewfwe.png"

//images
import SeatImg from "../../assets/images/seat.png";
import wheelImg from "../../assets/images/wheels.png";
import clusterImage from "../../assets/images/cluster.png";
import batteryImage from "../../assets/images/Durable-body.png"

function Portfolio() {
  return (
    <Box className="portfolio">
      <Box component={"img"} src={bg} alt="portfolio Bg" width="100%"/>
       <Box className="portfolio-wrapper">
          <Typography className="title">The Best Choice For A <span>Smooth</span> Ride.</Typography>
          
          <Box className="scooter-image">
          <Box component={"img"} src={scooter} alt="EV scooter"/>
          <Typography className='image-btn-outer btn-1'><span className='image-btn'>+</span></Typography>
          <Typography className='image-btn-outer btn-2'><span className='image-btn'>+</span></Typography>
          <Typography className='image-btn-outer btn-3'><span className='image-btn'>+</span></Typography>
          <Typography className='image-btn-outer btn-4'><span className='image-btn'>+</span></Typography>

          </Box>

          <Box sx={{height:"100%",width:"100%",top:"0%",zIndex:"22",position:"absolute"}}>
          <Box component={"img"} src={SeatImg} alt="features" className="feature-image image-1" />
          <Box component={"img"} src={wheelImg} alt="features" className="feature-image image-2" />
          <Box component={"img"} src={clusterImage} alt="features" className="feature-image image-3"/>
          <Box component={"img"} src={batteryImage} alt="features" className="feature-image image-4"/>
          </Box>
         
       </Box>

    </Box>
  )
}

export default Portfolio

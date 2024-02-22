import { Box} from '@mui/material'
import React, { useEffect, useRef } from 'react'


//video
import video from "../../assets/video/Samarth-EV-1.mp4";
//logo
import bannerLogo from "../../assets/images/banner-logo.png";

function Banner() {

    const vidRef=useRef();

    // useEffect(()=>{vidRef.current.play();},[])

  return (
    <Box className="banner-wrapper">
        <video width="100%" height="100%" autoPlay loop>
          <source src={video} type="video/mp4"/>
     </video>
     <Box component={'img'} src={bannerLogo} className='banner-logo'/>
    </Box>
  )
}

export default Banner

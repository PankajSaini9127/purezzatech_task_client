import { Box, Typography} from "@mui/material";
import React from "react";

//css
import "../../assets/css/auth.css";

import image from "../../assets/images/SamarthEV.webp";

function Main() {


  return (
    
    <Box className="auth-wrapper">
      <Box component={"img"} src={image} alt="logo" />
       <Typography sx={{textAlign:"center",fontSize:"40px",fontWeight:800}}>Welcome</Typography>
    </Box>
  );
}

export default Main;

import { Box, Container, Typography } from "@mui/material";
import React from "react";

//icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
      <Box className="footer-wrapper">
          <Container className="footer-content">
        <Box>
          <Typography className="title">Contact Us!</Typography>

          <Box className="social-icons">
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <TelegramIcon />
            <InstagramIcon />
          </Box>
        </Box>

        <Box  sx={{display:"flex",gap:"10px"}}>
            <LocationOnIcon className="location" />
            <Box>
            <Typography className="address-heading">Our Address:</Typography>
            <Typography className="addres">Plot No 121, G.I.D.C. Kalol, Ta. Kalol, Dist. Gandhinagar, Gujarat, India - 382721.</Typography>
            </Box>
        </Box>

    </Container>
        <Typography className="copyright">Proudly created by <span className="green">Purezza Technologies</span> with <span className="red">♥</span></Typography>
      </Box>
  );
}

export default Footer;

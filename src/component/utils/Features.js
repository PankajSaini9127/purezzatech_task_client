import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

//image
import EVScooter from "../../assets/images/ewfwe.png";
import icon1 from "../../assets/images/power_alt-1-60x60.png";
import icon2 from "../../assets/images/feature-icon2.png";
import icon3 from "../../assets/images/feature-icon3.png";
import icon4 from "../../assets/images/feature-icon4.png";
import EV1 from "../../assets/images/EV-1.png";
import EV2 from "../../assets/images/EV-2.png";
import EV3 from "../../assets/images/EV-3.png";
import EV4 from "../../assets/images/EV-4.png";
import EV5 from "../../assets/images/EV-5.png";
import EV6 from "../../assets/images/EV-6.png";

const data = [
  { image: icon1, title: "Energy Efficient" },
  { image: icon2, title: "Most Advanced Technology" },
  { image: icon3, title: "Durability And Strong Build" },
  { image: icon4, title: "Powerful Battery Pack" },
];


const EvFeatursArr = [
  {image:EV1,title:"Futuristic Design",desc:"Futuristic design melds innovation, aesthetics, and functionality, pushing boundaries creatively."},
  {image:EV2,title:"Cost Efficient",desc:"Maximizing value while minimizing expenses is the essence of cost efficiency."},
  {image:EV3,title:"Comfortable And Reliable",desc:" Comfortable and reliable, a winning combination for peace of mind"},
];

const Evfeature2=[
  {image:EV4,title:"Intelligent Control System",desc:"Seamlessly managing tasks through smart automation and insights."},
  {image:EV5,title:"More Space",desc:"More space offers ample storage capacity for added convenience and versatility."},
  {image:EV6,title:"100% Made In India",desc:"Showcasing indigenous craftsmanship and innovation proudly."}
]

function Features() {
  return (
    <>
      <Box className="feature_container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,133.3C672,117,768,139,864,144C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Container>
          <Box className="feature-wrapper">
            <Box className="Image">
              <Box
                component={"img"}
                src={EVScooter}
                height="100px"
                alt="EV Bike"
              />
            </Box>
            <Box>
              <Typography className="feature-text1">at samarth...</Typography>
              <Typography className="title">
                We Are Building <span>Future</span> For Tomorrow!
              </Typography>

              <Box className="features">
                {data.map(({ image, title }, index) => (
                  <Box key={index} className="feature-content">
                    <Box component={"img"} src={image} alt={title} />
                    <Typography>{title}</Typography>
                  </Box>
                ))}
              </Box>
              <Button className="exploreBtn" href="#features">
                Explore More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* EV features start here */}
      <Container>
        <Box className="EV-features-container" id="features">
          <Typography className="EV-heading">
            <span>EV</span> Features
          </Typography>
          <Typography className="details">
            We are best in the Industry. Let's explore our features.
          </Typography>

          <Box className="EV-features">
            <Box >
              {
                EvFeatursArr.map((item,index)=>(
                  EVFeatures(item,index,1)
                )
                  
                )
              }
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box
                component={"img"}
                src={EVScooter}
                height="300px"
                alt="EV Bike"
              />
            </Box>
            <Box>
              {
               Evfeature2.map((item,index)=>(
                EVFeatures(item,index,2)
              )              )
              }
            </Box>
          </Box>
        </Box>
      </Container>
      {/* EV features ends here */}
    </>
  );
}

export default Features;

function EVFeatures({ image, title, desc },index,imgOrder) {
  return (
    <Box className="EV-feature-div" key={index}>
      <Box sx={{order:imgOrder }} component={"img"} src={image} />
      <Box sx={{order:imgOrder ==1?2:1 }}>
      <Typography className="title">{title}</Typography>
      <Typography className="desc">{desc}</Typography>
      </Box>
    </Box>
  );
}

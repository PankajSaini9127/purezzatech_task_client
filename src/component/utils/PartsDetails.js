import React from "react";
import { Box, Container, Typography } from "@mui/material";

//images
import image1 from "../../assets/images/Battery1.png";
import image2 from "../../assets/images/Battery-copy.png";
import image3 from "../../assets/images/partdetails3.png";
import image4 from "../../assets/images/partsDetails4.png";
import image5 from "../../assets/images/partsDetails5.png";
import image6 from "../../assets/images/partsDetails6.png";

//banner
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.jpg";


const partsArr = [
  {
    image: image1,
    title: "Battery",
    desc: "A powerful battery pack that ensures efficient performance while contributing to a sustainable future with 0% carbon emissions. Embrace eco-friendly technology and reliability.",
  },
  {
    image: image2,
    title: "Battery Management System",
    desc: "A Battery Management System (BMS) efficiently monitors, balances, and safeguards a battery's performance, extending its lifespan while optimizing power usage for various vehicle categories.",
  },
  {
    image: image3,
    title: "Instrument Cluster",
    desc: "The instrument cluster, a critical component in vehicles, provides essential information like speed, battery usage, driving pattern, smart connectivity and more ensuring safe and informed driving experiences with precision and clarity.",
  },
  {
    image: image4,
    title: "Vehicle Control Unit",
    desc: "The Vehicle Control Unit (VCU) is the central brain of modern automobiles, managing functions like vehicle performance, safety, and efficiency, ensuring optimal vehicle operation and driver safety.",
  },
  {
    image: image5,
    title: "Motor",
    desc: "Revolutionizing 2-wheeler mobility, the electric motor in this cutting-edge vehicle delivers unparalleled power, seamlessly merging efficiency and performance. Designed for optimal acceleration and range, it sets new standards in electric propulsion, making it the epitome of sustainable and dynamic transportation.",
  },
  {
    image: image6,
    title: "Motor Controller",
    desc: "The cutting-edge motor controller for 2-wheelers epitomizes unparalleled power and efficiency in the realm of electric vehicles. Precision-engineered to optimize performance, it seamlessly orchestrates the electric motor, ensuring a dynamic and responsive ride, making it the epitome of EV propulsion technology.",
  },
];

const works = [
    {image:banner1,title:"Research And Development Prowess At Samarth E Mobility"},
    {image:banner2,title:"Cutting-Edge Technologies And Materials"},
    {image:banner3,title:"Top-Tier Talent From Premier Institutions"},
    {image:banner4,title:"Top-Tier Talent From Premier Institutions"},
]

function PartsDetails() {
  return (
    <>
    {/* black screen start here */}
    <Box className="partsDetails-wrapper">
      <Container maxWidth={"lg"}>
        <Box sx={{ maxWidth: "450px", margin: "auto" }}>
          <Typography className="title">
            Power packed with smart devices
          </Typography>
          <Typography className="text1">WHAT MAKES US EXCEPTIONAL?</Typography>
          <Typography className="text2">
            Our Research and Development team is working extensively to bring
            some innovation in the field of EV Industry.
          </Typography>
        </Box>
        <Box className="details-container">
          {partsArr.map((item, index) => Parts(item, index))}
        </Box>
      </Container>
    </Box>
    {/* black screen section ends here */}

    <Container className="working-wrapper">
        
       <Typography className="title">What We Do At <span>Samarth</span> ?</Typography>
       <Box className="works">
         {
            works.map((item,index)=>(
                OurWork(item,index)
            ))
         }
       </Box>
    </Container>

    </>
  );
}

export default PartsDetails;

function Parts({ image, title, desc }, index) {
  return (
    <Box className="details" key={index}>
      <Box>
        <Box component={"img"} src={image} alt="title" />
      </Box>
      <Box>
        <Typography className="title">{title}</Typography>
        <Typography className="desc">{desc}</Typography>
      </Box>
    </Box>
  );
};


function OurWork ({image,title}){
    return(
        <Box className="ourWork">
            <Box component={"img"} className="workImage" src={image} alt={title} />
            
            <Box className="image-wrapper">
            <Typography className="title">{title}</Typography>
            </Box>
            
        </Box>
    )
};

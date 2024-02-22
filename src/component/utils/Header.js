import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import logo from "../../assets/images/SamarthEV.webp";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "About Us", "Contact Us","Invistor","Career"];

function ResponsiveAppBar() {

  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" className="header-wrapper">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box style={{ flex: 1 }}>
            <Box
              component={"img"}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              src={logo}
              alt="SamarthEV"
              height="55px"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="hamburger-wrapper"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} className="list-menu">
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{display: { xs: "flex", md: "none" }, flexGrow: 2 }} >
            <Box
              component={"img"}
              src={logo}
              alt="SamarthEV"
              height="35px"
            />
          </Box>

          <Box sx={{flex:1,justifyContent:"space-evenly",  display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
                className="list-menu"
              >
                {page}
              </Button>
            ))}

<Button
                onClick={()=>{handleCloseNavMenu();navigate("/auth")}}
                sx={{ my: 2, display: "block" }}
                className="list-menu"
                
              >
               Login
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

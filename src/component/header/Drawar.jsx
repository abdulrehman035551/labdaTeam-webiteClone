import React, { useState } from "react";
import { Drawer, IconButton, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { styled } from "@mui/material/styles";
import { color, style } from "@mui/system";
import "../header/Header.css";

let activeStyle = {
  color: "orangered",
 
};

let inactiveStyle = {
  color: "black",
};

let data = [
  {
    id: 1,
    label: "For Startups",
    link: "/startups",
  },
  {
    id: 2,
    label: "Works",
    link: "/works",
  },
  {
    id: 3,
    label: "For Business",
    link: "/business",
  },
  {
    id: 4,
    label: "Our Process",
    link: "/process",
  },
  {
    id: 5,
    label: "Internship",
    link: "/internship",
  },
  {
    id: 6,
    label: "Let’s talk",
    link: "/",
  },
];

const CustomNavLink = ({ to, label }) => {
  return (
   
 <NavLink 
      to={to}
      className="links1"
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    >
      {label}
    </NavLink>
  
  );
};

function DrawarComp(props) {
  let css = styled({
    backgroundColor: "red",
  });

  return (
    <div>
      {/* <Box sx={{ width: "200px", height: "300px", border: "solid" }}></Box> */}
      <Drawer
        className="drawer"
        // marginTop="100px"
        anchor="right"
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false)}
        PaperProps={{
          style: {
            marginTop: "70px",
            boxShadow: "none",
            zIndex: 6,
            textAlign:"center"
          },
        }}
        hideBackdrop
      >
        <Box
          display="grid"
          onClick={() => props.setOpenDrawer(!props.openDrawer)}
          sx={{ marginTop: "20px" }}
        >
          {data.map((val) => {
            return (
              <CustomNavLink key={val.id} to={val.link} label={val.label} />
            );
          })}
        </Box>
      </Drawer>
      <IconButton
      id="icon-btn"
        sx={{
          color: "orangered",
          zIndex: 20000000000,
          position: " relative",
          left: "76px",
        }}
        onClick={() => props.setOpenDrawer(!props.openDrawer)}
      >
        {props.openDrawer ? <CloseRoundedIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
}

export default DrawarComp;

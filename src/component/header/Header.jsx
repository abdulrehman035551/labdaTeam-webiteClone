import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Tabs,
  ImageList,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "./Header.css";
import DrawarComp from "./Drawar";
import shadows from "@mui/material/styles/shadows";

function Header({ onClick }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  let activeStyle = {
    color: "orangered",
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      {
        <AppBar
          sx={{
            boxShadow: "none",
            background: "white",
            position: "inherit",
          }}
        >
          <Toolbar>
            <Link id="logo-link"
              style={{  width: "65%", zIndex: 9999999 }}
              to=""
              onClick={() => setOpenDrawer(false)}
            >
              <img id="logo" src="./logo.svg" />
            </Link>
            {isMatch ? (
              <>
                <DrawarComp
                // sx={{border:"solid",backgroundColor:"red"}}
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                />
              </>
            ) : (
              <Box
                style={{
                  color: "black",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <NavLink
                  className="links"
                  to="/startups"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  For Startups
                </NavLink>
                <NavLink
                  className="links"
                  to="/works"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Works
                </NavLink>
                <NavLink
                  className="links"
                  to="/business"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  For Business
                </NavLink>
                <NavLink
                  className="links"
                  to="/process"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Our Process
                </NavLink>
                <NavLink
                  className="links"
                  to="/internship"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Internship
                </NavLink>
                <NavLink
                  className="links"
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {/* <a href="#form">Let’s talk</a> */}
                  Let's talk
                </NavLink>
                {/* <NavLink
                  onClick={onClick}
                  className="links"
                  to=""
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Let’s talk
                </NavLink> */}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      }
    </div>
  );
}

export default Header;

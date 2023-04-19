import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { textAlign, width } from "@mui/system";

function Work(props) {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{ marginY: "100px", }} >
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
            <Typography
          id="second-heading"
          variant="h3"
          sx={{
            fontStyle: " normal",
            fontWeight: " 600",
            fontSize: "64px",
            lineHeight: "72px",
            color: "rgb(19, 19, 24)",
            fontFamily: "Six Caps, sans-serif",
            // marginLeft: "30PX",
            marginBottom: "40px",
          }}
        >
          Who we <span style={{ color: " rgb(255, 75, 0)" }}>work with</span>
        </Typography>
            </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              className="geeks"
              sx={{
                border: "1px solid #ccc",
                padding: "30px",
                height: "auto",
                minHeight: "400px",
                // overflowX: "hidden",
              }}
            >
              <Grid item xs={12} md={8} sx={{ padding: "20px" }}>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    display: "inline-grid",
                  }}
                  variant="h4"
                  color="black"
                  list-style="none"
                >
                  Businesses
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "inherit",
                    color: "rgb(91, 91, 91)",
                    marginTop: "20px",
                  }}
                >
                  We’ll study your business problem, design an efficient
                  solution and support it afterward.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img className="work-img" src="./mid1-pic.svg" width="100%" height="100%" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              className="geeks"
              sx={{
                border: "1px solid #ccc",
                padding: "30px",
                height: "auto",
                minHeight: "400px",
                // overflowX: "hidden",
              }}
            >
              <Grid item xs={12} md={8} sx={{ padding: "20px" }}>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    display: "inline-grid",
                  }}
                  variant="h4"
                  color="black"
                  list-style="none"
                >
                  Startups
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "inherit",
                    color: "rgb(91, 91, 91)",
                    marginTop: "20px",
                  }}
                >
                  With years of experience in backend architecture and cloud,
                  we’ll turn your idea into a stable MVP in no time.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img className="work-img" src="./mid2-pic.svg" width="100%" height="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

     
      </Container>
    </div>
  );
}

export default Work;

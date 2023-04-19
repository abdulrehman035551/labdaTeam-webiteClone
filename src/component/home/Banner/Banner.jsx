import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom"

import React, { useState, useEffect } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import { Grid, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { textAlign, width } from '@mui/system';

function Banner(props) {
    return (
        <div>
            <Box sx={{ width: "100%", marginTop: "30px" }} >
                <Typography id="first-heading" sx={{

                    fontStyle: " normal",
                    fontWeight: " 600",
                    fontSize: "64px",
                    lineHeight: "72px",
                    color: "rgb(19, 19, 24)",
                    textAlign: "center",
                    fontFamily: 'Six Caps, sans-serif',
                    // marginTop: "30px",
                }}>
                    Hi, we are Lambda — developers who <spna style={{ color: " rgb(255, 75, 0)" }}>architect and advise on AWS</spna>
                </Typography>
                <Button id="btn"
                    sx={{
                        posiion: " relative",
                        left: "85px",
                        top: "37px",
                    }}
                >Get in touch</Button>
                <img id="bc-img" style={{
                    objectFit: "cover",
                    width: "100%",
                    // height: "243px",
                }} src='./main.webp'>
                </img>


            </Box>
        </div>
    );
}

export default Banner;
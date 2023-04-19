// import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom"

import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Grid, Item, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { textAlign, width } from '@mui/system';

function What(props) {
    return (
        <div>
            <Container maxWidth="xl" sx={{ marginY: "50px" }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography id="fourth-heading" variant='h2'
                            sx={{

                                fontStyle: " normal",
                                fontWeight: " 600",
                                fontSize: "64px",
                                lineHeight: "72px",
                                color: "rgb(19, 19, 24)",
                                fontFamily: 'Six Caps, sans-serif',
                                marginTop: "0px",
                                marginBottom: "80px",

                            }}>
                            What we've <span style={{ color: "rgb(255, 75, 0)" }}>developed </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box className='geeks' sx={{ backgroundColor: "#ebe6e6", color: "black", marginBottom: "5px", textAlign: "center" }}>
                            <img width="30px" className='project-image' src='./projectimage1.jpg'></img>


                        </Box>
                        <Box sx={{ marginBottom: "20px" }}>
                            <Typography sx={{
                                // margin: "24px 0px 8px",
                                padding: " 0px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: " 32px",
                                lineHeight: "40px",
                                color: "rgb(19, 19, 24)",


                            }}>
                                Service ZERO5
                            </Typography>
                            <Typography sx={{
                                fontWeight: "500",
                                color: "gray"
                            }} variant='text'>
                                Refactoring and Tech Update
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box className='geeks' sx={{ backgroundColor: "#ebe6e6", color: "black", marginBottom: "5px", textAlign: "center" }}>
                        <img className='project-image' src='./projectimage3.png'></img>

                    </Box>
                    <Box sx={{ marginBottom: "20px" }}>
                        <Typography variant='h4'
                            sx={{
                                margin: "24px 0px 8px",
                                padding: " 0px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: " 32px",
                                lineHeight: "40px",
                                color: "rgb(19, 19, 24)",

                            }}
                        >
                            DemandHelm
                        </Typography>
                        <Typography sx={{
                            fontWeight: "500",
                            color: "gray"
                        }} >
                            Web platform, Media
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box className='geeks' sx={{ backgroundColor: "#ebe6e6", color: "black", marginBottom: "5px", textAlign: "center" }}>
                        <img className='project-image' src='./projectimage2.png'></img>

                    </Box>
                    <Box sx={{ marginBottom: "20px" }}>
                        <Typography variant='h4'
                            sx={{
                                margin: "24px 0px 8px",
                                padding: " 0px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: " 32px",
                                lineHeight: "40px",
                                color: "rgb(19, 19, 24)",

                            }}
                        >
                            Aim Gods
                        </Typography>
                        <Typography sx={{
                            fontWeight: "500",
                            color: "gray"
                        }} >
                            APIs, website, and security enhancement
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box className='geeks' sx={{ backgroundColor: "#ebe6e6", color: "black", marginBottom: "5px", textAlign: "center" }}>
                        <img className='project-image' src='./projectimage4.jpg'></img>

                    </Box>
                    <Box >
                        <Typography variant='h4'
                            sx={{
                                margin: "24px 0px 8px",
                                padding: " 0px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: " 32px",
                                lineHeight: "40px",
                                color: "rgb(19, 19, 24)",

                            }}
                        >
                            AWS for GoDaddy
                        </Typography>
                        <Typography sx={{
                            fontWeight: "500",
                            color: "gray"
                        }} >
                            Startup Migration from GCP
                        </Typography>
                    </Box>
                    </Grid>
                </Grid>



            </Container>



        </div>
    );
}

export default What;
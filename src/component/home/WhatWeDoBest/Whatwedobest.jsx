import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom"

import React, { useState, useEffect } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import { Grid, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { textAlign, width } from '@mui/system';

function Whatwedobest(props) {
    return (
        <div>
            
           
            
         
            <Container
        maxWidth="xl"
        sx={{ marginY: "100px", }} >

          
                <Grid container sx={{ marginTop: "100px"}} >
                <Grid item md={12}>
            <Typography id="third-heading"   variant='h2'
                    sx={{
                        // border:"solid",
                        fontStyle: " normal",
                        fontWeight: " 600",
                        fontSize: "64px",
                        lineHeight: "72px",
                        color: "rgb(19, 19, 24)",
                        // textAlign: "center",
                        fontFamily: 'Six Caps, sans-serif',
                        marginTop: "0px",
                        marginBottom: "80px",
                    
                    }}>
                    What we <span style={{ color: "rgb(255, 75, 0)" }}>do best</span>
                </Typography>
            </Grid>
                    <Grid item md={6}>
                        <Box >
                            <img src='./1st.svg'></img>

                            <Typography id="boxs-heading" >
                                Scale up your team
                            </Typography>
                            <Typography className="boxes-para" variant="text">
                                You have work to do, we have people. It’s a match. Our engineers can help you out with any task.
                            </Typography>
                        </Box >
                    </Grid>
                    <Grid item md={6}>
                        <Box >
                            <img src='./2nd.svg'></img>
                            <Typography id="boxs-heading" >
                                Build architecture
                            </Typography>
                            <Typography className="boxes-para" variant="text">
                                Need to build a reliable and cost-effective architecture for your project? That’s exactly what we’re best at.                                    </Typography>
                        </Box >
                    </Grid>
                    <Grid item md={6}>
                        <Box >
                            <img style={{marginTop:"50px"}} src='./3rd.svg'></img>
                            <Typography id="boxs-heading" >
                                Advise on AWS
                            </Typography>
                            <Typography className="boxes-para" variant="text">
                                You’ve seen a list of AWS services. We know how to navigate them and find the right one. All you have to do is ask.                                    </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box >
                            <img style={{marginTop:"50px"}} src='./4th.svg'></img>
                            <Typography id="boxs-heading" >
                                Develop your app
                            </Typography>
                            <Typography className="boxes-para" variant="text">
                                From determining what data to store and building a database to tying it up with front- and backend.                                    </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                     <Box className="services-button">
                        <Button id='btn2'>Read more on our services</Button>
                    </Box>
                    </Grid>
                   
                </Grid>
                </Container>
        </div>
    );
}

export default Whatwedobest;
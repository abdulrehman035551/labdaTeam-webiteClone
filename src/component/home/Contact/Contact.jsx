import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom"

import React, { useState, useEffect } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import { Grid, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { textAlign, width } from '@mui/system';
function Contact(props) {
    return (
        <div>
            <Box type="div"
                sx={{

                    Maxwidth: "100%",
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                <Typography id="fifth-heading" variant="h3"
                    sx={{
                        textAlign: "-webkit-match-parent",
                        fontWeight: "300",
                        fontSize: " 3.75rem",

                        letterSpacing: "-0.00833em",
                        color: "rgb(19, 19, 24)",
                        fontStyle: " normal",
                        fontWeight: " 600",
                        width: "40%",
                        lineHeight: " 72px",
                        fontFamily: "Six Caps,sans-serif",
                        marginTop: "70px",
                        marginLeft: "50px",
                        marginBottom: "80px",
                    }}>
                    Tell us about your project and <span>{" "}</span>
                    <Typography variant='span'
                        sx={{
                            color: "orangered"
                        }}
                    >
                        we’ll think about it
                    </Typography>
                </Typography>
                <FormControl id="user-form" sx={{

                    width: "450px",
                }}>


                    <lable className="lable" >Name</lable>
                    <input placeholder='Sheldon Copper' id="stan" variant="standard" />
                    <lable className="lable"  >Title</lable>
                    <input placeholder='Doctor of science' id="stan" variant="standard" />
                    <lable className="lable"  >Email</lable>
                    <input placeholder='dr.cooper@caltech.com' id="stan" variant="standard" />
                    <lable className="lable"  >Project description</lable>
                    <textarea id="stan" placeholder='I have this idea..'/>

                    <Button id="btnx">Send</Button>
                </FormControl>


            </Box>
        </div>
    );
}

export default Contact;
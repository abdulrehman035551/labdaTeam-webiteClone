import Home from "./component/home/home";
import { Routes, Route } from "react-router-dom"
import Header from "./component/header/Header"
import Business from "./component/business/business";
import Startups from './component/startups/startups'
import Works from "./component/works/works";
import Process from "./component/process/process";
import Internship from "./component/internship/internship";
// import Contact from "./component/home/contact";
import "./App.css"
// import Startanimation from "./component/startanimation/startanimation";
import React from 'react';

import { useState, useEffect } from 'react';
function App() {
  let [loading, setLoading] = useState(false)
  let [preloading, setPreloading] = useState(false)
  let [afterloading, setAfterloading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setAfterloading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setPreloading(true);

    setTimeout(
      function mytimeout() {
        setAfterloading(false)
      }
      , 2500)
    setTimeout(
      function () {
        setPreloading(false)

      }, 3100)
  },
    []);
  return (
    <div>


      {(() => {
        if (loading) {
          return (
            <h1 className='pre-loader'>Hi!</h1>
          )
        } else if (afterloading) {
          return (
            <h1 className='pre-loader'>We are</h1>
          )

        }
        else if (preloading) {
          return (
            <h1 className='pre-loader' id='team'>Lambda Team</h1>
          )

        }
        else {
          return <div>
            <Header />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path='/business' element={<Business />}></Route>
              <Route path='/startups' element={<Startups />}></Route>
              <Route path='/works' element={<Works />}></Route>
              <Route path='/process' element={<Process />}></Route>
              <Route path='/internship' element={<Internship />}></Route>
              {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
          </Routes>

          </div>


        }

      })()}





    </div>
  );
}

export default App;

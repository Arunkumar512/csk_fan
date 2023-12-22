import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Team from './component/Team';
import Navi from './component/Nav'
import Home from './component/Home';
import Gallery from './component/Gallery';
import Wistlepodu from './component/Wistlepodu';
import Shop from './component/Shop';
import Csktv from './component/Csktv';
import Carts from './component/Carts';
import Contact from './component/Contact';
import Social from './component/social';
import preloads from "./component/image/preload.gif";
import offical from "./component/audio/offical.mp3"
import lion from "./component/image/cskmos.jpg"

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 9550)
  }, [])

  return (
    <div className="App">
      {
        loading ?
          <div className="loade col-12 col-sm-2 col-md-5 col-lg-5 col-xl-12 ">
            <img className="loade col-12 col-md-4 col-lg-5 col-xl-3" id='flags' src={preloads} alt="flag" />
            <iframe src={offical} allow="autoplay" id="audio" ></iframe>
            <audio id="player" autoplay  allow="autoplay"  ><source src={offical} type="audio/mp3"/></audio>
  
            <img  className='col-5 col-md-4 col-lg-5 col-xl-3' src={lion} alt="image"/>
          </div>
          :
          <BrowserRouter>
            <Navi />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/Team" element={<Team />} />
              {/* <Route path="/Wistlepodu" element={<Wistlepodu />} /> */}
               <Route path="/Shop" element={<Shop />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Csktv" element={<Csktv />} />
              {/* <Route path="/Contact" element={<Contact />} />
              <Route path="/Carts" element={<Carts />} /> */}
            </Routes>
            <Social />
          </BrowserRouter>
      }
    </div>
  );
}


export default App;

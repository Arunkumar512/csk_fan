import React from 'react'
import Navi from './Nav'
import "./Csktv.css"
import trophy from "../component/video/csk1.mp4"
import csk from "./image/csktv.jpg"
function Csktv() {
  return (
    <div>
      <Navi />
      <div id="Csktv" className='containers'>
        <div className="box">
          <img id='csk' src={csk} alt="" srcset="" />
        </div>
      </div>
      <div className="tvs" >
        <video muted autoPlay allow="autoplay" loop  src={trophy} ></video>
      </div>
    </div>

  )
}

export default Csktv
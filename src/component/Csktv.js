import React from 'react'
import "./Csktv.css"
import trophy from "../component/video/csk1.mp4"
import csk from "./image/csktv.jpg"
function Csktv() {
  return (
    <div>
      <div id="Csktv" className='containers '>
        <img id='csk' src={csk} alt="" srcset="" className='parent' />
        <div className="tvs" >
          <video muted autoPlay allow="autoplay" loop src={trophy} ></video>
        </div>
      </div>
    </div>

  )
}

export default Csktv
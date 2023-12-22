import React from 'react'
import images from "./gallery_img"
import "./gallery.css"

function Gallery() {
  return (
    <>
      <div className='d-flex justify-content-around container-fluid'>
        <div className='row' id="gall">
          <div className='col-11 img-bg mx-auto'>
            <div className="row d-flex justify-content-around my-5 mx-5">
              {
                images.map((val) => {
                  return (
                    <>
                      <div className="items col-12 col-md-5 col-lg-5 col-xl-3 mb-4">
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-11 col-xl-12 img-div">
                            <img id="gall" src={val.img} alt="players" className='img-fluid' style={{ maxWidth: "100%", maxHeight: "100%" }} />
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gallery

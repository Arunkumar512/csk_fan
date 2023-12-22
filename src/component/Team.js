import { useState } from 'react';
import Players from './Players';
import "./Team.css"
function Team() {

  const [Player, setPlayer] = useState(Players);
  const filterItem = (categ) => {

    const updateItem = Players.filter((val) => {
      return val.role === categ || val.team === categ;
    }
    )
    setPlayer(updateItem);
  }
  return (
    <>
      <div className='bg'>
        <div className="mt-3 menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
            <button className='btn btn-warning mb-3' onClick={() => filterItem('BATTER')}>Batsman</button>
            <button className='btn btn-warning mb-3' onClick={() => filterItem('BOWLER')}>Bowler</button>
            <button className='btn btn-warning mb-3' onClick={() => filterItem('ALL-ROUNDER')}>All Rounder</button>
            <button className='btn btn-warning mb-3' onClick={() => filterItem('PLAYER')} >Players</button>
            <button className='btn btn-warning mb-3' onClick={() => filterItem('SUPPORT STAFF')} >Staff</button>
          </div>
        </div>
      </div>
      <div className='menu-items d-flex justify-content-around container-fluid'>
        <div className='row bg'>
          <div className='col-11 check mx-auto'>
            <div className="row d-flex justify-content-around my-5 mx-5">
              {
                Player.map((val) => {
                  return (
                    <>
                      <div className="card col-12 col-md-5 col-lg-5 col-xl-3 mb-4">
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-11 col-xl-12 img-div">
                            <img id="img" src={val.img} alt="players" className='img-fluid' />
                          </div>
                          <div className="col-12 col-md-12 col-lg-5">
                            <div className="vProfile pt-4 pb-3">
                              <h6 id='name'>
                                {val.name}
                              </h6>
                              <p id='role'>
                                {val.role}
                              </p>
                            </div>
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
      <div className="bg">
      <br/>
      <br/>
      <br/>
      </div>



    </>
  )
}

export default Team


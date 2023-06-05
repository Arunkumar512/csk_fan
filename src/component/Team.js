import React from 'react'
import Navi from './Nav'
import Players from './Players';
import Card from 'react-bootstrap/Card';
function Team() {
  return (
    <div id='Team'>
      <Navi />
      {
        Players.map((element) => {
          return (
            <Card bg='' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={element.img} />
              <Card.Body>
                <Card.Title><h4>{element.name} </h4></Card.Title>
                <div className="profile">
                <h6>
                  {element.role}
                </h6>
                <h6>
                  view profile
                </h6>
                </div>
              </Card.Body>
            </Card>
          );
        }
        )
      }
    </div>
  )
}

export default Team
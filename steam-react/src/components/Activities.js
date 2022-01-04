import React from 'react'
import {Link, Route} from "react-router-dom"
import {CardGroup, Card} from "react-bootstrap"
import SantaGame from './SantaGame'

class Activities extends React.Component {
  render() {
    return (
      <CardGroup>
      <Card>
        <Link to="/SantaGame">

            <span>SANTAGAME</span>
          
        </Link>
        <Route
                    path="/SantaGame"
                    component={SantaGame} 
                />
        </Card>
        </CardGroup>
    )
    }
}

export default Activities

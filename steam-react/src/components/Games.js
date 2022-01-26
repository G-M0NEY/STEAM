import React from 'react'
import { Card, CardGroup, Nav, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import CrushBoard from "./CrushBoard";

class Games extends React.Component {
    render() {
      return (
            <Router>
            <div>
              <CardGroup className='container mt-1'>
                <Card className='bg-info border border-2 border-secondary text-center h3'>
                  <a target="_blank" rel="noreferrer" className='bg-light border border-rounded border-dark m-2 text-primary h1'  href={process.env.PUBLIC_URL + "game.html"} >Santa Speedrun</a>
                </Card>
                <Card className='bg-info border border-2 border-secondary text-center h3'>
                  <Nav.Link className='text-dark' as={Link} to={"/loveCrush"} >Love Crush</Nav.Link>
                </Card>
              </CardGroup>
            </div>
            <Switch>
              <Route path="/loveCrush">
                <CrushBoard />
              </Route>
            </Switch>
          </Router>
            
        )
      }
  }

export default Games
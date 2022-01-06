import React from 'react'
import logo from ".//media/STEAM1.png";
import { Nav, Navbar, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Activities from './Activities';
import './components.css';

function changeBg(e) {
    e.target.style.background = 'black';
}

function revertBg(e) {
    e.target.style.background = 'rgb(24, 168, 194)';
}

const Navigation = () => {
    return (
        <div>
        <Router>
        <div>
          <Navbar expand="lg" bg="myBlue">
            <Navbar.Brand className="text-white p-1" href="App.js">
              <img src={logo} alt="steam" width="150px" height="50px" />
              
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link onMouseOver={changeBg} onMouseLeave={revertBg} className="text-white h4" as={Link} to={"/activities"} >Activities</Nav.Link>
              </Nav>
              <Nav>
                
                <Nav.Link className="text-white h4" as={Link} to={"/activities"} >Games</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route path="/activities">
            <Activities />
          </Route>
        </Switch>
      </Router>
      </div>
    )
}

export default Navigation

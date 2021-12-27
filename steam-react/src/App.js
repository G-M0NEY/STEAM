import React from 'react'
import './App.css';
import logo from ".//media/STEAM.png";
import { Nav, Navbar, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Activities from './components/Activities';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar expand="lg" bg="myBlue">
            <Navbar.Brand className="text-white" href="#">
              <img src={logo} width="100px" height="50px"/>
              STEAM 
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link className="text-white" as={Link} to={"/activities"} >Activities</Nav.Link>
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

export default App;

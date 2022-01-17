import React from 'react'
import { Card, CardGroup, Nav, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Halloween from './Halloween';
import Thanks from './Thanks';

class Activities extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <CardGroup className='container mt-1'>
          <Card className='bg-info border border-2 border-secondary text-center h3'>
            <Nav.Link className='text-dark' as={Link} to={"/thanks"} >Thanksgiving Activity</Nav.Link>
          </Card>
          <Card className='bg-info border border-2 border-secondary text-center h3'>
            <Nav.Link className='text-dark' as={Link} to={"/halloween"} >Halloween Activity</Nav.Link>
          </Card>
        </CardGroup>
      </div>
      <Switch>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/halloween">
          <Halloween />
        </Route>
      </Switch>
    </Router>
      )
    }
}

export default Activities

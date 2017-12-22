import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';


const NavHeader = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">NZ Cricket</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="www.cricinfo.com">CricInfo</NavItem>
        <NavDropdown eventKey={3} title="Site guide" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Schedule</MenuItem>
          <MenuItem eventKey={3.2}>Tweets</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Ground map</MenuItem>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
);

// ReactDOM.render(navbarInstance, mountNode);

export default NavHeader;
import React from 'react';
import Navbar from 'react-Bootstrap/lib/NavBar';
import Nav from 'react-Bootstrap/lib/Nav';
import NavItem from 'react-Bootstrap/lib/NavItem';
import NavDropdown from 'react-Bootstrap/lib/NavDropdown';
import MenuItem from 'react-Bootstrap/lib/MenuItem';

export default class NavigationBar extends React.Component {
  render() {
    return(
      <div className="navbar-wrapper">
        <div className="container">
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Third Eye</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
        </div>
      </div>
    );
  }
}

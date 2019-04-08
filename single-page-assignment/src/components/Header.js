import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
    render(){
      return (
        <header>
           <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink exact className="nav-link" to="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/education">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/work">Work experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      )
    }
  }
  
export default Header
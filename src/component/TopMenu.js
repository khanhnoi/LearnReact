import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Context} from '../contexts/cart';
const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    

    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Learn React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
              <Link to="/">Home</Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/product">Product</Link>              
                </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/count">Count</Link>
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <Context.Consumer>
                  {({cartItems})=>
                  <Link to="/product">Cart ({cartItems.length})</Link>
                  }
                    
                </Context.Consumer>
                          
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/contact">Liên Hệ</Link>              
                </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
   
  );
}

export default TopMenu;
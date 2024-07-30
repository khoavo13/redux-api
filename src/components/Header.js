import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

export default function Header() {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = ()=>setCollapsed(!collapsed);
    const cart = useSelector(state=>state.cart.items)
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/product">Products</Link>
            </NavItem>
            <NavItem>
              <Link to="/register">Register</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link to="/cart">
          Cart <span>{cart.length}</span>
        </Link>
      </Navbar>
    </div>
  );
}

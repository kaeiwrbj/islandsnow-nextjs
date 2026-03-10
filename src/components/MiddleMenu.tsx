'use client';

import { Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const MiddleMenu = () => (
    <Nav className="justify-content-md-center py-3">
        <NavDropdown title={"MEN"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
        <NavDropdown title={"WOMEN"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
        <NavDropdown title={"KIDS"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
        <NavDropdown title={"BRANDS"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
        <Nav.Link>SEARCH</Nav.Link>
    </Nav>
);

export { MiddleMenu };
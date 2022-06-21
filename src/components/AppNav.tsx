import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

const AppNav = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Link to="/" className="nav-link" activeClassName="active">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                    to="/call_for_papers"
                    className="nav-link"
                    activeClassName="active"
                >
                    Call For Papers
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                    to="/committee"
                    className="nav-link"
                    activeClassName="active"
                >
                    Committee
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                    to="/schedule"
                    className="nav-link"
                    activeClassName="active"
                >
                    Schedule
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                    to="/past_workshops"
                    className="nav-link"
                    activeClassName="active"
                >
                    Past Workshops
                </Link>
            </Nav.Item>
        </Nav>
    );
};

export default AppNav;

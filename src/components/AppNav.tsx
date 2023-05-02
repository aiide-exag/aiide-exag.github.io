import React from 'react';
import { Nav } from 'react-bootstrap';
// import { Link } from 'gatsby';

const AppNav = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <a
                    href="/"
                    className="nav-link">
                    Home
                </a>
            </Nav.Item>
            <Nav.Item>
                <a
                    href="/call_for_papers"
                    className="nav-link"
                >
                    Call For Papers
                </a>
            </Nav.Item>
            <Nav.Item>
                <a
                    href="/committee"
                    className="nav-link"
                >
                    Committee
                </a>
            </Nav.Item>
            <Nav.Item>
                <a
                    href="/schedule"
                    className="nav-link"
                >
                    Schedule
                </a>
            </Nav.Item>
            <Nav.Item>
                <a
                    href="/past_workshops"
                    className="nav-link"
                >
                    Past Workshops
                </a>
            </Nav.Item>
        </Nav>
    );
};

export default AppNav;

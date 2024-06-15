import React from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppNav = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Link href="/" className="nav-link">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/schedule" className="nav-link">
                    Schedule
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/call_for_papers" className="nav-link">
                    Call For Papers
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/committee" className="nav-link">
                    Committee
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/past_workshops" className="nav-link">
                    Past Workshops
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/papers" className="nav-link">
                    Paper Database
                </Link>
            </Nav.Item>
        </Nav>
    );
};

export default AppNav;

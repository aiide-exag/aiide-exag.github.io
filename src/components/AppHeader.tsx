import React from 'react';
import { Container } from 'react-bootstrap';
import AppNav from './AppNav';

const AppHeader = () => {
    return (
        <>
            <Container className="mb-3">
                <div className="mb-5">
                    <h1 className="display-1">EXAG 2024</h1>
                    <div className="display-5">
                        AIIDE Workshop on Experimental AI in Games
                    </div>
                    <div className="display-6" style={{ color: '#f2185d' }}>
                        November 18th or 19th, 2024
                    </div>
                </div>

                <AppNav></AppNav>

                <div
                    className={`bg-orange-red w-100`}
                    style={{ height: '4px' }}
                ></div>
                <div
                    className={`bg-queen-blue w-100`}
                    style={{ height: '4px' }}
                ></div>
                <div
                    className={`bg-sky-blue w-100`}
                    style={{ height: '4px' }}
                ></div>
            </Container>
        </>
    );
};

export default AppHeader;

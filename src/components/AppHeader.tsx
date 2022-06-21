import React from 'react';
import { Container } from 'react-bootstrap';
import AppNav from './AppNav';

const AppHeader = () => {
    return (
        <div>
            <Container className="mb-3">
                <div className="mb-5">
                    <h1 className="display-1">EXAG 2022</h1>
                    <div className="display-5">
                        AIIDE Workshop on Experimental AI in Games
                    </div>
                </div>

                <AppNav></AppNav>

                <div
                    className={`bg-orange-red w-100`}
                    style={{ height: '4px' }}
                ></div>
                <div
                    className={`bg-honey-yellow w-100`}
                    style={{ height: '4px' }}
                ></div>
                <div
                    className={`bg-queen-blue w-100`}
                    style={{ height: '4px' }}
                ></div>
            </Container>
        </div>
    );
};

export default AppHeader;

import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const SchedulePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2022: Schedule" />
            <Container className="py-5">
                <h1>Schedule</h1>
                <p>TBD</p>
            </Container>
        </AppLayout>
    );
};

export default SchedulePage;

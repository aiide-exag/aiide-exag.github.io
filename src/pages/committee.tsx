import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const CommitteePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2022: Committee" />
            <Container className="py-5">
                <h1>Organizing Committee</h1>
                <p>
                    EXAG 2022: Abdelrahman Madkour, Lucas N. Ferreira, and Shi
                    Johnson-Bey.
                </p>
                <h1>Program Committee</h1>
                <p>TBD</p>
            </Container>
        </AppLayout>
    );
};

export default CommitteePage;

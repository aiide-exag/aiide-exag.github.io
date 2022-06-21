import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import AppLayout from '../components/AppLayout';

const NotFoundPage = () => {
    return (
        <AppLayout>
            <Helmet title="Page not found."></Helmet>
            <title>Not found</title>
            <Container className="py-5">
                <h1>Page not found</h1>
            </Container>
        </AppLayout>
    );
};

export default NotFoundPage;

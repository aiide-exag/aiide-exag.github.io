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
                <iframe
                    className="w-100"
                    style={{ height: '400px' }}
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0HFQm1s8pvgJvLn4x6Mpc1MriCppj9vxKJ87XAfIYXoZqWC8TsOWYfzq6UyUPea-MWTD8yunvxuse/pubhtml?gid=1642943011&amp;single=true&amp;widget=true&amp;headers=false"
                ></iframe>
            </Container>
        </AppLayout>
    );
};

export default SchedulePage;

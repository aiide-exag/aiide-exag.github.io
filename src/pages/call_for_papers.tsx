import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import cfp from "../call_for_papers.md";

const CallForPapersPage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2023: Call for Papers" />
            <Container className="py-5">
                <section
                        dangerouslySetInnerHTML={{__html: cfp}}
                        itemProp="articleBody"
                />
            </Container>
        </AppLayout>
    );
};

export default CallForPapersPage;

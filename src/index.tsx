import * as React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2024: Experimental AI in Games" />
            <Container className="py-5">
                <div>
                    <h2>What is EXAG?</h2>
                    <p>
                        The Experimental AI in Games (EXAG) workshop is a
                        workshop held at the AI for Interactive Digital
                        Entertainment conference (AIIDE). At EXAG, AI
                        practitioners from academia and industry are given a
                        platform to showcase their work on new applications of
                        AI in games.
                    </p>
                    <p>
                        EXAG will be taking place for its 11th year at the 2024
                        AIIDE Conference. Beyond being just a workshop,
                        EXAG aims to foster a community where new ideas can be
                        proposed and developed within the space of the workshop
                        itself, thanks to sessions that emphasize showing,
                        teaching, and inventing, alongside the traditional paper
                        presentations. We hope to continuously support the
                        presence of diverse voices from diverse backgrounds, in
                        our AIIDE community, through new participants choosing
                        to attend the broader conference.
                    </p>
                    <p>
                        We hope to see you at EXAG! Please reach out to the
                        organizing committee if you have any questions or
                        concerns.
                    </p>
                    <h2 className="mb-2">Announcements</h2>
                    <div className="announcement">
                        <h3>2024 dates coming soon</h3>
                        <p>
                            Dates for workshop will be released soon. When it is released,
                            we will update and post the new dates.
                        </p>
                    </div>
                    <h2 className="mb-2">Registration</h2>
                    <p>
                        If you would like to attend the Experimental AI in Games
                        workshop, please register for the{' '}
                        <a
                            href="https://sites.google.com/gcloud.utah.edu/aiide-2024/home"
                            target="_blank"
                            rel="noopener"
                        >
                            AIIDE 2024 Conference
                        </a>
                        .
                    </p>
                </div>
            </Container>
        </AppLayout>
    );
};

export default IndexPage;
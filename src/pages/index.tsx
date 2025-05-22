import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2025: Experimental AI in Games" />
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
                        EXAG will be taking place for its 12th year at the 2025
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
                        <h3>2025 workshop dates!</h3>
                        <p>
                            The workshop will be held on November 10th & 11th.
                        </p>
                    </div>
                    <div className="announcement">
                        <h3>2025 Call for Papers</h3>
                        <p>
                            Submissions are due on <b>August 22th, 2025</b><br />
                            <a
                                href="https://www.exag.org/call_for_papers"
                                target="_blank"
                                rel="noopener"
                            >
                                Call for Papers
                            </a>
                        </p>
                    </div>
                    <h2 className="mb-2">Registration</h2>
                    <p>
                        If you would like to attend the Experimental AI in Games
                        workshop, please register for the{' '}
                        <a
                            href="https://sites.google.com/ualberta.ca/aiide2025/home"
                            target="_blank"
                            rel="noopener"
                        >
                            AIIDE 2025 Conference
                        </a>
                        .
                    </p>
                </div>
            </Container>
        </AppLayout>
    );
};

export default IndexPage;

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
                        AIIDE AIIDE Conference. Beyond being just a workshop,
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
                        <h3>2023 & 2022 proceedings coming soon</h3>
                        <p>
                            The published proceedings for the 2023 and 2022
                            workshop will be released soon. When it is released,
                            we will update the paper database.
                        </p>
                    </div>
                    <div className="announcement">
                        <h3>Accepted papers have been posted</h3>
                        <p>
                            The accepted papers/talks for 2023 have been posted
                            on the Schedule page. A schedule of the talks will
                            be released soon.
                        </p>
                    </div>
                    <div className="announcement">
                        <h3>Submission deadline extended!</h3>
                        <p>
                            The submission deadline for EXAG 2023 has been
                            extended to July 27th, 2023 🚀. Please see our Call
                            for Papers for submission instructions.
                        </p>
                    </div>
                    <div className="announcement">
                        <h3>Our Call for Papers is now open!</h3>
                        <p>
                            Submissions for EXAG full papers and short papers
                            are now open{' '}
                            <a href="https://easychair.org/my/conference?conf=aiide23">
                                on EasyChair
                            </a>
                            ! Please select the Experimental AI in Games track
                            when you make your submission. Lightning talk
                            proposals should instead be emailed to the
                            organizers at: exag20xx@gmail
                            <p style={{ display: 'none' }}>.ignoreme</p>.com
                        </p>
                    </div>
                    <div className="announcement">
                        <h3>
                            EXAG is back for its 10th year at the 2023 AIIDE
                            Conference!
                        </h3>
                        <p>
                            Please see our call for papers with important dates.
                            We look forward to reviewing your submission. Please
                            feel free to reach out to the organizing committee
                            via Twitter or email if you have any questions.
                            Thank you for supporting EXAG, and we hope to see
                            you this fall!
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

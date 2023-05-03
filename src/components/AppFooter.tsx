import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import * as styles from './AppFooter.module.scss';

const SOCIAL_LINKS = [
    {
        url: 'https://www.youtube.com/channel/UCe5wOhqbVOTJfrJ7RuJOEKg',
        icon: faYoutube,
    },
    {
        url: 'https://twitter.com/exag20xx',
        icon: faTwitter,
    },
];

const AppFooter = () => {
    return (
        <Container fluid className={`${styles.footer} bg-charcoal`}>
            <Container className={`pt-5 pb-3 text-white`}>
                <Row className={`mb-5`}>
                    <Col md={6} className="mb-3">
                        <div
                            style={{
                                display: 'flex',
                                gap: '6px',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{ fontSize: '2rem' }}>
                                Experimental AI in Games Workshop
                            </div>
                        </div>
                        <div style={{ fontSize: '1.2rem' }}>
                            Find us on social media!
                        </div>
                        <div
                            className={`mt-2`}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'end',
                                flexDirection: 'row',
                            }}
                        >
                            {SOCIAL_LINKS.map((entry, i) => (
                                <a
                                    key={`social_icon_${i}`}
                                    href={entry.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${styles.footerLink}`}
                                >
                                    <FontAwesomeIcon
                                        icon={entry.icon}
                                        size="2x"
                                    />
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bolder',
                                textAlign: 'right',
                            }}
                        >
                            Sitemap
                        </div>
                        <div>
                            <ul
                                style={{
                                    listStyleType: 'none',
                                    padding: '0',
                                    textAlign: 'right',
                                }}
                            >
                                <li>
                                    <Link
                                        href="/"
                                        className={`${styles.footerLink}`}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/call_for_papers"
                                        className={`${styles.footerLink}`}
                                    >
                                        Call for Papers
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/committee"
                                        className={`${styles.footerLink}`}
                                    >
                                        Committee
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/past_workshops"
                                        className={`${styles.footerLink}`}
                                    >
                                        Past Workshops
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <div>
                                <ul
                                    style={{
                                        listStyleType: 'none',
                                        padding: '0',
                                    }}
                                ></ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={`text-center`}>
                    <p>Website designed by 2022 Organizing Committee.</p>
                    <p>
                        Maintained on{' '}
                        <a
                            href="https://github.com/aiide-exag"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'white' }}
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </Container>
        </Container>
    );
};

export default AppFooter;

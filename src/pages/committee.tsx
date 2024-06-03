import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const ORGANIZING_COMMITTEE = [
    {
        name: 'Emily Halina',
        email: 'ehalina@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Johor Jara Gonzalez',
        email: 'jaragonz@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Mira Fisher',
        email: 'mira.fisher@uky.edu',
        affiliation: 'University of Kentuchy',
    },
    
];

const PROGRAM_COMMITTEE: { name: String; affiliation: String }[] = [
    {
        name: 'TBD',
        affiliation: 'TBD',
    },
    
];

const CommitteePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2023: Committee" />
            <Container className="py-5">
                <h1>Workshop Organizers</h1>
                <ul>
                    {ORGANIZING_COMMITTEE.map((member, i) => (
                        <li key={`organizer_${i}`}>
                            {member.name} ({member.email}) --{' '}
                            {member.affiliation}
                        </li>
                    ))}
                </ul>

                <h1>Program Committee</h1>
                <ul>
                    {PROGRAM_COMMITTEE.map((member, i) => (
                        <li key={`pc_${i}`}>
                            {member.name} -- {member.affiliation}
                        </li>
                    ))}
                </ul>
            </Container>
        </AppLayout>
    );
};

export default CommitteePage;

import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const ORGANIZING_COMMITTEE = [
    {
        name: 'Fiona Shyne',
        email: 'shyne.f@northeastern.edu',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Kaylah Facey',
        email: 'facey.k@northeastern.edu',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Dave Goel',
        email: 'dgoel1@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'ravyn Hardcastle',
        email: 'ravynh@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Ross Mawhorter',
        email: 'mawhorte@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Gage Birchmeier',
        email: 'gage.birchmeier@uky.edu',
        affiliation: 'University of Kentucky',
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
            <Seo title="EXAG 2026: Committee" />
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

                {/* <h1>Program Committee</h1>
                <ul>
                    {PROGRAM_COMMITTEE.map((member, i) => (
                        <li key={`pc_${i}`}>
                            {member.name} -- {member.affiliation}
                        </li>
                    ))}
                </ul> */}
            </Container>
        </AppLayout>
    );
};

export default CommitteePage;

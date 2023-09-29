import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const ORGANIZING_COMMITTEE = [
    {
        name: 'Abdelrahman Madkour',
        email: 'madkour.a@husky.neu.edu',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Jasmine Otto',
        email: 'jtotto@ucsc.edu',
        affiliation: 'University of California, Santa Cruz',
    },
    {
        name: 'Lucas N. Ferreira',
        email: 'lnferrei@ualberta.ca',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Shi Johnson-Bey',
        email: 'ismajohn@ucsc.edu',
        affiliation: 'University of California, Santa Cruz',
    },
];

const PROGRAM_COMMITTEE: { name: String; affiliation: String }[] = [
    {
        name: 'Matthew Barthet',
        affiliation: 'Institute of Digital Games, University of Malta',
    },
    {
        name: 'Morteza Behrooz',
        affiliation: 'Worcester Polytechnic Institute',
    },
    {
        name: 'Colon Biemer',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Vadim Bulitko',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Sara Cardinale',
        affiliation: 'Queen Mary University of London',
    },
    {
        name: 'M Charity',
        affiliation: 'New York University ',
    },
    {
        name: 'Seth Cooper',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Sam Earle',
        affiliation: 'New York University',
    },
    {
        name: 'Sean Guillory',
        affiliation: 'Booz Allen Hamilton',
    },
    {
        name: 'Matthew Guzdial',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Emily Halina',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Ian Horswill, Associate Professor',
        affiliation: 'Northwestern University',
    },
    {
        name: 'Ahmed Khalifa',
        affiliation: 'University of Malta',
    },
    {
        name: 'Max Kreminski',
        affiliation: 'Santa Clara University',
    },
    {
        name: 'Sylvain Lapeyrade',
        affiliation: 'Paul Sabatier University',
    },
    {
        name: 'Dr. Peter Mawhorter',
        affiliation: 'Wellesley College',
    },
    {
        name: 'Allison Parrish, Assistant Arts Professor',
        affiliation: 'New York University',
    },
    {
        name: 'Nathan Partlan',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Johannes Pfau',
        affiliation: 'University of California Santa Cruz',
    },
    {
        name: 'Ben Samuel',
        affiliation: 'University of New Orleans',
    },
    {
        name: 'Akash Saravanan',
        affiliation: 'University of Alberta',
    },
    {
        name: 'Laurissa Tokarchuk',
        affiliation: 'Queen Mary University of London',
    },
    {
        name: 'Jim Whitehead',
        affiliation: 'University of California Santa Cruz',
    },
    {
        name: 'Oliver Withington',
        affiliation: 'Queen Mary University of London',
    },
    {
        name: 'Richard Zhao',
        affiliation: 'University of Calgary',
    },
    {
        name: 'Dr. Alex Zook',
        affiliation: 'Blizzard Entertainment',
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

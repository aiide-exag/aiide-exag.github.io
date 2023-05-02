import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const ORGANIZING_COMMITTEE = [
    {
        name: 'Abdelrahman Madkour',
        email: 'madkour.a@northeastern.edu',
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
        name: 'Shi Johnson-Bey, M.S.',
        email: 'ismajohn@ucsc.edu',
        affiliation: 'University of California, Santa Cruz',
    },
];

const PROGRAM_COMMITTEE: ({name: String, affiliation: String})[] = []
/* [
    {
        name: 'Rehaf Aljammaz',
        affiliation: 'University of Califronia, Santa Cruz',
    },
    {
        name: 'Matthew Barthet',
        affiliation: 'University of Malta',
    },
    {
        name: 'Dr. Morteza Behrooz',
        affiliation: 'Meta',
    },
    {
        name: 'M Charity',
        affiliation: 'New York University ',
    },
    {
        name: 'Mike Cook',
        affiliation: 'Queen Mary University of London',
    },
    {
        name: 'Seth Cooper',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Jñani Crawford',
        affiliation: 'University of California, Santa Cruz',
    },
    {
        name: 'Sam Earle',
        affiliation: 'New York University',
    },
    {
        name: 'Dr. Raluca D. Gaina',
        affiliation: 'Queen Mary University of London',
    },
    {
        name: 'Sean Guillory, Ph.D.',
        affiliation: 'Booz Allen Hamilton',
    },
    {
        name: 'Ian Horswill, Associate Professor',
        affiliation: 'Northwestern University',
    },
    {
        name: 'Dr. Mads Johansen PhD',
        affiliation: 'Modl.ai',
    },
    {
        name: 'Ahmed Khalifa',
        affiliation: 'University of Malta',
    },
    {
        name: 'Max Kreminski',
        affiliation: 'University of California, Santa Cruz',
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
        name: 'Dr. Justus Robertson Ph.D.',
        affiliation: 'Rochester Institute of Technology',
    },
    {
        name: 'Dr. Ben Samuel ',
        affiliation: 'University of New Orleans',
    },
    {
        name: 'Anurag Sarkar',
        affiliation: 'Northeastern University',
    },
    {
        name: 'Chintan Trivedi',
        affiliation: 'University of Malta',
    },
    {
        name: 'Prof. Stephen G. Ware',
        affiliation: 'University of Kentucky',
    },
    {
        name: 'Dr. Alex Zook',
        affiliation: 'NVIDIA',
    },
]; */

const CommitteePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2023: Committee" />
            <Container className="py-5">
                <h1>Organizing Committee for 2023</h1>
                <ul>
                    {ORGANIZING_COMMITTEE.map((member, i) => (
                        <li key={`organizer_${i}`}>
                            {member.name} &lt;{member.email}&gt;
                        </li>
                    ))}
                </ul>

                <h1>Program Committee</h1>
                <ul>
                    {PROGRAM_COMMITTEE.map((member, i) => (
                        <li key={`pc_${i}`}>
                            {member.name} &lt;{member.affiliation}&gt;
                        </li>
                    ))}
                </ul>
            </Container>
        </AppLayout>
    );
};

export default CommitteePage;

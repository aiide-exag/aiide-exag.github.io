import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import { Table } from 'react-bootstrap';

const pastWorkshopInfo = [
    {
        year: 2023,
        date: 'October 8th',
        organizers:
            'Abdelrahman Madkour, Lucas N. Ferreira, and Shi Johnson-Bey',
        location: ' Salt Lake City, Utah, USA',
        papers: 16,
    },
    {
        year: 2022,
        date: 'October 24-25',
        organizers:
            'Abdelrahman Madkour, Lucas N. Ferreira, and Shi Johnson-Bey',
        location: 'Cal Poly Pomona, California, USA',
        papers: 15,
    },
    {
        year: 2021,
        date: 'October 11-12',
        organizers: 'Mads Johansen Lassen, Quinn Kybartas, and M Charity',
        location: 'virtual',
        papers: 13,
    },
    {
        year: 2020,
        date: 'October 19-20',
        organizers: 'Ahmed Khalifa, Max Kreminski, and Sasha Azad',
        location: 'virtual',
        papers: 16,
    },
    {
        year: 2019,
        date: 'October 8-9',
        organizers: 'Duri Long and Max Kreminski',
        location: 'Atlanta, Georgia, USA',
        papers: 18,
    },
    {
        year: 2018,
        date: 'November 13-14',
        organizers: 'Jo Mazeika, Ethan Robinson, and Alex Zook',
        location: 'Edmonton, Alberta, CA',
        papers: 19,
    },
    {
        year: 2017,
        date: 'October 5-6',
        organizers: 'Jo Mazeika, James Ryan, Tanya X. Short, and Kristin Siu',
        location: 'Snowbird, Utah, USA',
        papers: 20,
    },
    {
        year: 2016,
        date: 'October 8-9',
        organizers: 'Alex Zook, Michael Cook, and Antonios Liapis',
        location: 'Burlingame, California, USA',
        papers: 14,
    },
    {
        year: 2015,
        date: 'November 14-15',
        organizers: 'Alex Zook, Michael Cook, and Antonios Liapis',
        location: 'Santa Cruz, California, USA',
        papers: 12,
    },
    {
        year: 2014,
        date: 'November 3',
        organizers: 'Alex Zook and Michael Cook',
        location: 'Raleigh, NC, USA',
        papers: 12,
    },
];

const PastWorkshopsPage = () => (
    <AppLayout>
        <Seo title="EXAG 2023: Past Workshops" />
        <Container className="py-5">
            <h1 className="mb-3">Past Workshops</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Date</th>
                        <th>Organizers</th>
                        <th>Location</th>
                        <th>Papers</th>
                    </tr>
                </thead>
                <tbody>
                    {pastWorkshopInfo.map(
                        ({ year, date, organizers, location, papers }) => (
                            <tr key={`workshop_${year}`}>
                                <td>{year}</td>
                                <td>{date}</td>
                                <td>{organizers}</td>
                                <td>{location}</td>
                                <td>{papers}</td>
                            </tr>
                        )
                    )}
                    <tr></tr>
                </tbody>
            </Table>
        </Container>
    </AppLayout>
);

export default PastWorkshopsPage;

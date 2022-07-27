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

const PROGRAM_COMMITTEE = [
	{
		name: 'Dr. David Thue',
		affiliation: 'Carleton University',
	},
	{
		name: 'Sean Guillory, Ph.D.',
		affiliation: 'Booz Allen Hamilton',
	},
	{
		name: 'Seth Cooper',
		affiliation: 'Northeastern University',
	},
	{
		name: 'M Charity',
		affiliation: 'New York University ',
	},
	{
		name: 'Rodrigo Canaan',
		affiliation: 'Cal Poly State University',
	},
	{
		name: 'Dr. Alex Zook',
		affiliation: 'NVIDIA',
	},
	{
		name: 'Dr. Ben Samuel ',
		affiliation: 'University of New Orleans',
	},
	{
		name: 'Dr. Mads Johansen PhD',
		affiliation: 'Modl.ai',
	},
	{
		name: 'Anurag Sarkar',
		affiliation: 'Northeastern University',
	},
	{
		name: 'Fernando de Mesentier Silva PhD',
		affiliation: 'Electronic Arts',
	},
	{
		name: 'Dr. Matthew Stephenson',
		affiliation: 'Maastricht University',
	},
	{
		name: 'Dr. Raluca D. Gaina',
		affiliation: 'Queen Mary University of London',
	},
	{
		name: 'Mike Cook',
		affiliation: 'Queen Mary University of London',
	},
	{
		name: 'Dr. Barrett Anderson',
		affiliation: 'Google / CSU Monterey Bay',
	},
	{
		name: 'Prof. Stephen G. Ware',
		affiliation: 'University of Kentucky',
	},
	{
		name: 'Luis Garcia',
		affiliation: 'Northeastern University',
	},
	{
		name: 'Alex Calderwood',
		affiliation: 'University of California, Santa Cruz',
	},
	{
		name: 'Allison Parrish, Assistant Arts Professor',
		affiliation: 'New York University',
	},
	{
		name: 'Dr. Justus Robertson Ph.D.',
		affiliation: 'Rochester Institute of Technology',
	},
	{
		name: 'Dr. Morteza Behrooz',
		affiliation: 'Meta',
	},
	{
		name: 'Sam Earle',
		affiliation: 'New York University',
	},
	{
		name: 'Ahmed Khalifa',
		affiliation: 'University of Malta',
	},
	{
		name: 'Dr. Peter Mawhorter',
		affiliation: 'Wellesley College',
	},
	{
		name: 'Chinmaya Dabral',
		affiliation: 'North Carolina State University',
	},
	{
		name: 'Ian Horswill, Associate Professor',
		affiliation: 'Northwestern University',
	},
	{
		name: 'Jnani Crawford',
		affiliation: 'University of Califronia, Santa Cruz',
	},
	{
		name: 'Rehaf Aljammaz',
		affiliation: 'University of Califronia, Santa Cruz',
	},
	{
		name: 'Mr. Matthew Barthet',
		affiliation: 'University of Malta',
	},
	{
		name: 'Dr. Joseph C. Osborn, PhD',
		affiliation: 'Pomona College',
	},
	{
		name: 'Chintan Trivedi',
		affiliation: 'University of Malta',
	},
	{
		name: 'Nathan Partlan',
		affiliation: 'Northeastern University',
	},
	{
		name: 'Ms. Quinn Kybartas',
		affiliation: 'McGill University',
	},
];

const CommitteePage = () => {
	return (
		<AppLayout>
			<Seo title="EXAG 2022: Committee" />
			<Container className="py-5">
				<h1>Organizing Committee for 2022</h1>
				<ul>
					{ORGANIZING_COMMITTEE.map((member, i) => (
						<li key={`organizer_${i}`}>
							{member.name} &lt;{member.email}&gt;
						</li>
					))}
				</ul>

				<h1>Program Committee</h1>
				{/* <ul>
					{PROGRAM_COMMITTEE.map((member, i) => (
						<li key={`pc_${i}`}>
							{member.name} &lt;{member.affiliation}&gt;
						</li>
					))}
				</ul> */}
				<p>TBD</p>
			</Container>
		</AppLayout>
	);
};

export default CommitteePage;

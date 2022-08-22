import * as React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const IndexPage = () => {
	return (
		<AppLayout>
			<Seo title="EXAG 2022: Experimental AI in Games" />
			<Container className="py-5">
				<div>
					<h2>What is EXAG?</h2>
					<p>
						The Experimental AI in Games (EXAG) workshop is a workshop held at the AI
						for Interactive Digital Entertainment conference (AIIDE). At EXAG, AI
						practitioners from academia and industry are given a platform to showcase
						their work on new applications of AI in games.
					</p>
					<p>
						EXAG will be taking place for its 9th year at the 2022 AIIDE AIIDE
						Conference. This year's theme for AIIDE is 'Mis-Spun Tales'. We specifically
						invite authors to submit their negative results. Discussing negative results
						help our research community to critically consider the underlying
						assumptions of our work or the evaluation methods we use. Authors are
						strongly encouraged to include a discussion of what we can learn from
						negative results and what future work they inspire.
					</p>
					<p>
						We hope to see you at EXAG! Please reach out to the organizing committee if
						you have any questions or concerns.
					</p>
					<h2 className="mb-2">Announcements</h2>
					<div className="announcement">
						<h3>2022 Submission Link Posted</h3>
						<p>
							The EasyChair link for submission is posted! Please see our [Call for
							Papers](https://www.exag.org/call_for_papers)
						</p>
					</div>
					<div className="announcement">
						<h3>Submission deadline extended to August 10</h3>
						<p>
							The deadline for submissions to AIIDE-22 workshops has been extended to
							August 10. You can breathe a sigh of relief.
						</p>
					</div>
					<div className="announcement">
						<h3>EXAG is back for its 9th year at the 2022 AIIDE Conference!</h3>
						<p>
							Please see our call for papers with important dates. We look forward to
							reviewing your submission. Please feel free to reach out to the
							organizing committee via Twitter or email if you have any questions.
							Thank you for supporting EXAG, and we hope to see you this fall!
						</p>
					</div>
				</div>
			</Container>
		</AppLayout>
	);
};

export default IndexPage;

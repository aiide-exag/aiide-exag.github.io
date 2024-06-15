import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import paper_data from '../paper_data.json';

/** Format of paper information in the archive */
interface PaperEntryInfo {
    abstract: string;
    authors: string;
    bibtex: string;
    link: string;
    local_file: string;
    old_url: string;
    title: string;
    year: string;
}

interface PaperDatabaseEntryProps {
    entryInfo: PaperEntryInfo;
}

interface PaperDatabaseEntryState {}

/** React component that displays information about a single paper */
const PaperDatabaseEntry: React.FC<PaperDatabaseEntryProps> = (props) => {
    const [showMore, setShowMore] = useState(false);

  var paper_link = props.entryInfo.link; 
  if (paper_link == ""){
	paper_link = props.entryInfo.local_file;
  }

    return (
        <div className={`paper-db-entry mb-3 rounded border p-3`}>
            <h3>{props.entryInfo.title}</h3>
            <div
                className={`fs-4 mb-3`}
            >{`${props.entryInfo.authors} (${props.entryInfo.year})`}</div>

            <a href={paper_link}>
                <Button className={`mb-3`}>Download PDF</Button>
            </a>
            <div>
                <Button
                    variant="secondary"
                    className={`mb-3`}
                    onClick={() => {
                        setShowMore(!showMore);
                    }}
                >
                    {showMore ? 'Show Less' : 'Read More'}
                </Button>
            </div>

            {showMore && (
                <>
                    <div>
                        <div className={`fs-5`}>Abstract</div>
                        <p>{props.entryInfo.abstract}</p>
                    </div>
                    <div>
                        <div className={`fs-5`}>Citation</div>
                        <pre className={`p-2 border rounded`}>
                            {props.entryInfo.bibtex}
                        </pre>
                    </div>
                </>
            )}
        </div>
    );
};

const PAPER_YEARS = [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
];

const PapersPage = () => {
    const [selectedYears, setSelectedYears] = useState<string[]>([]);

    const papers: PaperEntryInfo[] = paper_data;

    const toggleYear = (year: string) => {
        if (selectedYears.includes(year)) {
            selectedYears.splice(selectedYears.indexOf(year), 1);
        } else {
            selectedYears.push(year);
        }
        setSelectedYears([...selectedYears]);
    };

    const selected = (year: string) => {
        return selectedYears.includes(year);
    };

    return (
        <AppLayout>
            <Seo title="Previous Papers" />
            <Container className="py-5">
                <h1>EXAG Paper Database</h1>

                <div className={`border mb-3 rounded p-3`}>
                    <p>Filter by year</p>
                    <ButtonToolbar>
                        {PAPER_YEARS.map((year, index) => (
                            <Button
                                className={`m-2`}
                                variant={selected(year) ? 'info' : 'primary'}
                                key={index}
                                onClick={() => toggleYear(year)}
                            >
                                {year}
                            </Button>
                        ))}
                        <Button
                            className={`m-2`}
                            variant="primary"
                            onClick={() => setSelectedYears([])}
                        >
                            Clear Selection
                        </Button>
                    </ButtonToolbar>
                </div>
                {papers.map((entry, index) => {
                    if (selectedYears.length == 0 || selected(entry.year)) {
                        return (
                            <PaperDatabaseEntry entryInfo={entry} key={index} />
                        );
                    }
                })}
            </Container>
        </AppLayout>
    );
};

export default PapersPage;

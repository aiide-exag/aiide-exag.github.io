import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import paper_data from '../paper_data.json'
const PapersPage = () => {

    // <h1> data.allMarkdownRemark.edges[0].node.frontmatter.title
    /* 
                <section
                    dangerouslySetInnerHTML={{
                        __html: data.allMarkdownRemark.edges[0].node.html,
                    }}
                    itemProp="articleBody"
                />
                */
    const renderPapers = () => {
        var papers = []
        for (var i = 0; i < paper_data.length; i++) {
            papers.push(
                <>
                    <p>
                        {paper_data[i]["title"]}
                        {paper_data[i]["authors"]}
                        <a href={paper_data[i]["local_file"]}> paper pdf </a>
                    </p >
                </>
            )
        }
        return papers
    }
    return (
        <AppLayout>
            <Seo title="Previous Papers" />
            <Container className="py-5">
                {renderPapers()}
            </Container>
        </AppLayout>
    );
};

export default PapersPage;

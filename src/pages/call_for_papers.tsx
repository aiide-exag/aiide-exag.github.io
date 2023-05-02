import React from 'react';
import { Container } from 'react-bootstrap';
// import { graphql, PageProps } from 'gatsby';
// import ReactMarkdown from "react-markdown";
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import cfp from "../call_for_papers.md";

const CallForPapersPage = () => {

    // <h1> data.allMarkdownRemark.edges[0].node.frontmatter.title
    /* 
                <section
                    dangerouslySetInnerHTML={{
                        __html: data.allMarkdownRemark.edges[0].node.html,
                    }}
                    itemProp="articleBody"
                />
                */
    return (
        <AppLayout>
            <Seo title="EXAG 2022: Call for Papers" />
            <Container className="py-5"
                        dangerouslySetInnerHTML={{__html: cfp}}>
            </Container>
        </AppLayout>
    );
};

export default CallForPapersPage;
import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql, PageProps } from 'gatsby';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

interface CallForPapersPageData {
    allMarkdownRemark: {
        edges: {
            node: {
                html: string;
                frontmatter: {
                    title: string;
                };
            };
        }[];
    };
}

const CallForPapersPage: React.FC<PageProps<CallForPapersPageData>> = ({
    data,
}) => {
    return (
        <AppLayout>
            <Seo title="EXAG 2022: Call for Papers" />
            <Container className="py-5">
                <h1>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.title}
                </h1>
                <section
                    dangerouslySetInnerHTML={{
                        __html: data.allMarkdownRemark.edges[0].node.html,
                    }}
                    itemProp="articleBody"
                />
            </Container>
        </AppLayout>
    );
};

export default CallForPapersPage;

export const query = graphql`
    query CfpQuery {
        allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "Call for Papers" } } }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

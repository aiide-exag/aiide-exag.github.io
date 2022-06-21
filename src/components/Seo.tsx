import React from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';

interface SeoProps {
    title?: string;
    description?: string;
    photo?: string;
    article?: boolean;
}

const Seo: React.FC<SeoProps> = ({ title, description, photo, article }) => {
    return <Helmet title={title}></Helmet>;
};

export default Seo;

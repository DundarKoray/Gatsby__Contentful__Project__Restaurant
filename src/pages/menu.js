import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

const MenuPage = () => (
    <Layout>
        <SEO title="About Page" keywords={['gatsby', 'application', 'react']} />
        <h3>This is Menu page</h3>
    </Layout>
);

export default MenuPage;
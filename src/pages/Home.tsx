import React from 'react';
import Layout from '../layouts/Layout';
import HomeHero from '../components/home-page/Hero';
import HomeRecentStuff from '../components/home-page/RecentStuff';
import PapersAndThoughts from '../components/home-page/PapersAndThoughts';

const Home: React.FC = () => {
    return (
        <Layout title="Ivan Hernandez - Personal Website">
            <div>
                <HomeHero />
                <HomeRecentStuff />
                <PapersAndThoughts />
            </div>
        </Layout>
    );
};

export default Home;

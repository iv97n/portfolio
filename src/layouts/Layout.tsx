import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/fonts.css';

interface LayoutProps {
    title: string;
    description?: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    title,
    description = "Jumpstart your Astro project with this BCMS starter. Easily manage your content and scale your application without the backend hassle. Get started now!",
    children
}) => {
    const ogImageUrl = '/thumbnail.jpg';

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:secure_url" content={ogImageUrl} />
                <meta property="twitter:title" content="Personal Website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={ogImageUrl} />
            </Helmet>
            <div className="overflow-hidden flex flex-col min-h-screen">
                <Header />
                <main className="flex flex-col flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;

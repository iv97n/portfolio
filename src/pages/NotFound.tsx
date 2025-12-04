import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const NotFound: React.FC = () => {
    return (
        <Layout title="Page Not Found">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8">Page not found</p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-appText text-white rounded-full hover:bg-opacity-90 transition-all"
                >
                    Go back home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;

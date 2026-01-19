import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const WorkInProgress: React.FC = () => {
    return (
        <Layout title="Work In Progress">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Work in Progress</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl text-appGray-500">
                    I'm currently building this section. Please check back later for updates.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-appText text-white rounded-full hover:bg-opacity-90 transition-all font-medium"
                >
                    Go back home
                </Link>
            </div>
        </Layout>
    );
};

export default WorkInProgress;

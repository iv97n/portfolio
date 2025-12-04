import React from 'react';
import Layout from '../layouts/Layout';
import AnimatedTitle from '../components/AnimatedTitle';
import Items from '../components/testimonials/Items';
import { testimonialItems, testimonialsPageMeta } from '../data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <Layout title="Testimonials - Personal Website">
            <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
                <div className="container">
                    <AnimatedTitle
                        title={testimonialsPageMeta.title}
                        className="mb-10 md:mb-20 lg:mb-[124px]"
                        titleClassName="text-[114px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[190px] md:text-[220px] lg:text-[300px] lg:tracking-[5.59px] xl:text-[464px]"
                    />
                    <Items
                        items={testimonialItems}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Testimonials;

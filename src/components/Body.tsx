import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Art from './Art';
import History from './History';
import AboutSection from './AboutSection';
import Footer from './Footer';

const Body: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="px-[6%] py-[3%] flex flex-row justify-between">
                <div className="2xl:pt-[15%] 2xl:pl-[12%] pt-[50%] pb-[25%] 2xl:pb-[0%]">
                    <Intro />
                </div>
                <div className="hidden 2xl:block">
                    <Art />
                </div>
            </div>
            <AboutSection />
            <div>
                <History />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Body;

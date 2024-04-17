import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Art from './Art';
import About from './History';
import Footer from './Footer';
import ArtAlso from './ArtAlso';

const Body: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="px-[6%] py-[3%] flex flex-row justify-between">
                <div className="pt-[15%] pl-[12%]">
                    <Intro />
                </div>
                <div>
                    <Art />
                </div>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Footer />
                <ArtAlso />
            </div>
        </div>
    );
};

export default Body;

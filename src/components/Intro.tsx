import React from 'react';
import JumpingMouse from './JumpingMouse';
import { scrollToTop } from './scrollUtil';

const Intro: React.FC = () => {
    return (
        <div id="main" className="flex justify-center font-main font-light text-center 2xl:text-left">
            <div className="flex flex-col">
                <span className="text-4xl text-secondary dark:text-dark-secondary ">
                    Hey, I'm <span className="text-primary dark:text-dark-primary">James</span>
                </span>
                <span className="text-2xl pt-4 text-secondary dark:text-dark-secondary">
                    I'm a <span className=" text-primary dark:text-dark-primary">Software Engineer</span> working on UX
                    design
                </span>
                <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                    Currently working at{' '}
                    <a
                        className="text-primary dark:text-dark-primary border-b border-dashed"
                        href="https://www.levno.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Levno
                    </a>
                </span>
                {/* <span className="text-sm pt-3 text-secondary dark:text-dark-secondary">
                    This site is <span className=" text-primary dark:text-dark-primary">Under Development</span>
                </span> */}
                <div className="flex justify-center 2xl:pr-[30%] pt-[80%] xxl:pt-[60%]">
                    <a onClick={(e) => scrollToTop(e, 1)} href="#about">
                        <JumpingMouse />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;

import React, { useState } from 'react';
import { CiDesktopMouse2 } from 'react-icons/ci';

const Intro: React.FC = () => {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        if (!hover) {
            setHover(true);
            setTimeout(() => {
                setHover(false);
            }, 5000);
        }
    };

    return (
        <div className="flex justify-center font-main font-light">
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
                    >
                        Levno
                    </a>
                </span>
                <span className="text-sm pt-3 text-secondary dark:text-dark-secondary">
                    This site is <span className=" text-primary dark:text-dark-primary">Under Development</span>
                </span>
                <div className="flex justify-center pr-[30%] pt-[80%]">
                    <CiDesktopMouse2
                        onMouseMove={handleMouseOver}
                        className={`text-primary dark:text-dark-primary text-3xl ${hover ? 'icon' : ''}`}
                    />
                </div>
                <style>
                    {`
                    .icon {
                        animation: upAndDown 1s ease-in-out infinite;
                    }

                    @keyframes upAndDown {
                        0%, 100% {
                          transform: translateY(0);
                        }
                        50% {
                          transform: translateY(-15px);
                        }
                      }
                    }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Intro;

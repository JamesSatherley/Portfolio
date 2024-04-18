import React, { useRef, useState } from 'react';
import Me from '../assets/me.png';

const History: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: any) => {
        if (imgRef.current) {
            const { left, top, width, height } = imgRef.current.getBoundingClientRect();
            const x = (((e.clientX - left) / width) * 100 - 50) / 8; // Normalize and shift the origin to the center
            const y = (((e.clientY - top) / height) * 100 - 50) / 8; // Normalize and shift the origin to the center

            setMousePosition({ x, y });
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="flex justify-center items-center font-main font-light h-screen space-x-40"
        >
            <div className="flex items-center" style={{ perspective: '1000px', height: '100%' }}>
                <img
                    ref={imgRef}
                    src={Me}
                    className="h-1/2"
                    alt="Pic of Me"
                    style={{
                        transform: `rotateY(${mousePosition.x / 10}deg) rotateX(${-mousePosition.y / 10}deg)`,
                        transition: 'transform 0.1s',
                    }}
                />
            </div>
            <div className="mb-6">
                <span className="text-3xl text-secondary dark:text-dark-secondary w-full flex justify-center mb-12 pr-12">
                    HISTORY
                </span>
                <div className="flex justify-center space-x-14">
                    <div className="flex flex-col items-center">
                        <div className="mt-[30px] flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Sep, 2017 - Current
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[60px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Dec 2022 - Sep 2023
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[76px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Nov 2021 - Dec 2023
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary" />
                            <div className="h-[76px] w-0 border-l-2 border-primary dark:border-dark-secondary shadow-about dark:shadow-dark-about-secondary" />
                        </div>
                        <div className="flex flex-row">
                            <div className="w-56 text-secondary dark:text-dark-secondary text-about">
                                Jul 2022 - Nov 2022
                            </div>
                            <div className="border-2 rounded-full h-5 w-5 border-primary dark:border-dark-primary shadow-about dark:shadow-dark-about" />
                        </div>
                    </div>
                    <div className=" flex flex-col ">
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Currently, I'm developing both internal and <br />
                            external tools for{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.levno.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Levno
                            </a>{' '}
                            using a range of tools.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Previously, at{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://accessitlibrary.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Accessit
                            </a>
                            , I have managed <br />
                            internal componentary libraries used at
                            <br /> scale in client-facing and interal applications.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Further, with{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.insourcerecruit.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Insource
                            </a>
                            , I managed a penertration <br />
                            testing project, followed by development on a <br />
                            React, PHP web appliation.
                        </span>
                        <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                            Lastly, my Capstone project with{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href="https://www.microsoft.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Microsoft
                            </a>
                            <br />
                            involved managing dependancy reliance in <br />
                            Azure's Java SDK.
                        </span>
                        <span className="text-xl pt-4 text-secondary dark:text-dark-secondary">
                            Want to get in touch?{' '}
                            <a
                                className="text-primary dark:text-dark-primary border-b border-dashed"
                                href='mailto:jamesrsatherley@gmail.com?subject="Hey!"'
                            >
                                Flick me a message
                            </a>
                            .
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;

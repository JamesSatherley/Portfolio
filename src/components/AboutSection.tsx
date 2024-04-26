import React, { useState } from 'react';
import JumpingMouse from './JumpingMouse';
import { scrollToTop } from './scrollUtil';

const SpinningCube: React.FC = () => {
    const [rotation, setRotation] = useState({ x: 45, y: 45 });
    const rotations = [
        'rotateY(0deg) translateZ(50px)',
        'rotateY(180deg) translateZ(50px)',
        'rotateY(90deg) translateZ(50px)',
        'rotateY(-90deg) translateZ(50px)',
        'rotateX(90deg) translateZ(50px)',
        'rotateX(-90deg) translateZ(50px)',
    ];

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { width, height, top, left } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 360 - 180;
        const y = ((event.clientY - top) / height) * 360 - 180;

        setRotation({ x: -y / 40 + 45, y: x / 40 + 45 }); // Scale down the effect for smoother rotation
    };

    return (
        <div id="about" className="flex flex-row" onMouseMove={handleMouseMove}>
            <div className="w-[40%] ml-[10%] hidden 2xl:block">
                <div
                    className="scene w-full h-screen flex justify-center items-center"
                    style={{ perspective: '600px' }}
                >
                    <div
                        className="relative w-96 h-96"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        }}
                    >
                        {rotations.map((rotation, index) => (
                            <div
                                key={index}
                                className={`absolute w-96 h-96 border border-secondary dark:border-dark-primary rounded-xl`}
                                style={{ transform: rotation }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="2xl:mr-[10%] mb-[20%] 2xl:mb-0 flex flex-col justify-center items-center w-full 2xl:w-[40%]">
                <span className="text-3xl text-secondary dark:text-dark-secondary w-full flex justify-center mb-12">
                    ABOUT
                </span>
                <div className="text-center flex flex-col w-4/5 ">
                    <span className="text-lg pt-5 text-secondary dark:text-dark-secondary">
                        I am a <span className=" text-primary dark:text-dark-primary">Software Engineer</span> with a
                        strong passion for technology. I have skills crafted from creating custom{' '}
                        <span className=" text-primary dark:text-dark-primary">
                            software solutions, personal hardware projects, and years of professional experience
                        </span>{' '}
                        which allow me to bring a versatile skill set to{' '}
                        <span className=" text-primary dark:text-dark-primary">
                            innovate and solve complex problems
                        </span>
                        .
                    </span>
                    <span className="text-lg pt-5 text-secondary dark:text-dark-secondary">
                        Throughout my career, I've developed a broad range of technical skills across various domains,
                        including{' '}
                        <span className=" text-primary dark:text-dark-primary">
                            full-stack web development, penetration testing, and the creation of libraries and SDKs
                        </span>{' '}
                        in many languages, not limited to{' '}
                        <span className=" text-primary dark:text-dark-primary">
                            Java&nbsp;/&nbsp;Typescript, C++, Java and Python
                        </span>
                        .
                    </span>
                    <span className="text-lg pt-5 text-secondary dark:text-dark-secondary">
                        Away from the keyboard, I love to catch a bit of sun. Whether it's{' '}
                        <span className=" text-primary dark:text-dark-primary">
                            hiking, hunting, or simply exploring our great backyard
                        </span>
                        , I find this the perfect way to{' '}
                        <span className=" text-primary dark:text-dark-primary">escape and recharge</span>.
                    </span>
                </div>
                <div className="mt-[10%] hidden 2xl:block">
                    <a onClick={(e) => scrollToTop(e, 2)} href="#about">
                        <JumpingMouse />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SpinningCube;

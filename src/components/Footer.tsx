import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { FaTwitterSquare } from 'react-icons/fa';
import { TbSquareArrowUpFilled } from 'react-icons/tb';
import { scrollToTop } from './scrollUtil';

const Footer: React.FC = () => {
    const [line1Style, setLine1Style] = useState({});
    const [line2Style, setLine2Style] = useState({});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const centerY = window.innerHeight / 2;
            const mouseY = e.clientY;

            const deltaY = mouseY - centerY;
            const rotation = (deltaY / centerY) * 1.2;
            const lengthAdjustment = (Math.abs(deltaY) / centerY) * 1.2;

            setLine1Style({
                transform: `rotate(${rotation}deg)`,
                width: `calc(30% + ${lengthAdjustment}%)`,
            });
            setLine2Style({
                transform: `rotate(${-rotation}deg)`,
                width: `calc(30% + ${lengthAdjustment}%)`,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="flex justify-center font-main font-light space-x-10">
                <a href='mailto:jamesrsatherley@gmail.com?subject="Hey!"'>
                    <FaEnvelopeSquare className="text-4xl text-secondary dark:text-dark-secondary hover:text-primary hover:dark:text-dark-primary transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/jamessatherley/" rel="noreferrer" target="_blank">
                    <FaLinkedin className="text-4xl text-secondary dark:text-dark-secondary hover:text-primary hover:dark:text-dark-primary transition-colors" />
                </a>
                <a href="#top" onClick={(e) => scrollToTop(e, 0)}>
                    <TbSquareArrowUpFilled className="text-4xl text-secondary dark:text-dark-secondary hover:text-primary hover:dark:text-dark-primary transition-colors" />
                </a>
                <a href="tel:0225457881" rel="noreferrer" target="_blank">
                    <FaSquarePhone className="text-4xl text-secondary dark:text-dark-secondary hover:text-primary hover:dark:text-dark-primary transition-colors" />
                </a>
                <a href="https://twitter.com/jamessatherley" rel="noreferrer" target="_blank">
                    <FaTwitterSquare className="text-4xl text-secondary dark:text-dark-secondary hover:text-primary hover:dark:text-dark-primary transition-colors" />
                </a>
            </div>
            <div className="hidden items-center flex-col mt-10 2xl:flex">
                <div
                    className="w-[600px] h-0 border-b-2 border-secondary dark:border-dark-secondary shadow-about dark:shadow-dark-about-tiny"
                    style={line1Style}
                />
                <div
                    className="w-[600px] h-0 border-b-2 border-secondary dark:border-dark-secondary shadow-about dark:shadow-dark-about-tiny"
                    style={line2Style}
                />
            </div>
            <span className="flex justify-center text-sm text-secondary dark:text-dark-secondary py-10">
                Updated April 2024
            </span>
        </div>
    );
};

export default Footer;

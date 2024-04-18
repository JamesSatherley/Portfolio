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
        <>
            <CiDesktopMouse2
                onMouseMove={handleMouseOver}
                className={`text-primary dark:text-dark-primary text-3xl ${hover ? 'icon' : ''}`}
            />
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
        </>
    );
};

export default Intro;

import React, { useState } from 'react';

const Art: React.FC = () => {
    const [transform, setTransform] = useState('');
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100 - 50;
        const y = ((e.clientY - rect.top) / rect.height) * 100 - 50;

        const distortion = 0.05;
        const rotateX = y * distortion;
        const rotateY = -x * distortion;

        setTransform(`perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };
    return (
        <div className="flex justify-end items-start w-[800px]" onMouseMoveCapture={handleMouseMove}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{ transform }}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Horizontal lines with circles */}
                {Array.from({ length: 8 }, (_, i) => (
                    <React.Fragment key={i}>
                        <line
                            x1={i * 13}
                            y1="100"
                            x2="100"
                            y2={i * 13}
                            stroke="#1a1c5e"
                            strokeWidth="0.1"
                            className="block dark:hidden"
                        />
                        <line
                            x1={i * 13}
                            y1="100"
                            x2="100"
                            y2={i * 13}
                            stroke="#fcfcd2"
                            strokeWidth="0.1"
                            className="hidden dark:block"
                        />
                    </React.Fragment>
                ))}

                {/* Central circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="#ffffeb"
                    stroke="#1a1c5e"
                    strokeWidth="0.1"
                    className="block dark:hidden"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="#0e0f30"
                    stroke="#fcfcd2"
                    strokeWidth="0.1"
                    className="hidden dark:block"
                />

                {/* Orbiting circles */}
                <circle
                    cx="50"
                    cy="50"
                    r="4"
                    fill="#ffffeb"
                    stroke="#1a1c5e"
                    strokeWidth="0.1"
                    className="orbit-circle block dark:hidden"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="4"
                    fill="#0e0f30"
                    stroke="#fcfcd2"
                    strokeWidth="0.1"
                    className="orbit-circle hidden dark:block"
                />

                <circle
                    cx="50"
                    cy="50"
                    r="6"
                    fill="#ffffeb"
                    stroke="#1a1c5e"
                    strokeWidth="0.1"
                    className="orbit-circle2 block dark:hidden"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="6"
                    fill="#0e0f30"
                    stroke="#fcfcd2"
                    strokeWidth="0.1"
                    className="orbit-circle2 hidden dark:block"
                />
            </svg>

            <style>
                {`
              @keyframes orbit {
                0% {
                  transform: rotate(0deg) translateX(20px) rotate(0deg);
                }
                100% {
                  transform: rotate(360deg) translateX(20px) rotate(-360deg);
                }
              }

              @keyframes orbit2 {
                0% {
                  transform: rotate(0deg) translateX(-20px) rotate(0deg);
                }
                100% {
                  transform: rotate(360deg) translateX(-20px) rotate(-360deg);
                }
              }

              .orbit-circle2 {
                animation: orbit2 25s linear infinite;
                transform-origin: 50% 50%;
              }

              .orbit-circle {
                animation: orbit 15s linear infinite;
                transform-origin: 50% 50%;
              }
              `}
            </style>
        </div>
    );
};

export default Art;

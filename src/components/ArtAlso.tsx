import React, { useState } from 'react';

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

        setRotation({ x: -y / 20 + 45, y: x / 20 + 45 }); // Scale down the effect for smoother rotation
    };

    return (
        <div
            className="scene w-full h-screen flex justify-center items-center"
            style={{ perspective: '600px' }}
            onMouseMove={handleMouseMove}
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
                        className={`absolute w-96 h-96 border-2 border-secondary dark:border-dark-secondary rounded-xl`}
                        style={{ transform: rotation }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SpinningCube;

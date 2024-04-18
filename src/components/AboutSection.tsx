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
            <div className="w-[40%] ml-[10%]">
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
            <div className="w-[40%] mr-[10%] flex flex-col justify-center items-center">
                <span className="text-3xl text-secondary dark:text-dark-secondary w-full flex justify-center mb-12">
                    ABOUT
                </span>
                <div className="text-center flex flex-col w-1/2">
                    <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a turpis in sapien lobortis
                        efficitur a quis enim. Nam rutrum sollicitudin libero, eget faucibus metus cursus a. Duis in
                        ullamcorper turpis. Vestibulum aliquam justo sed volutpat vestibulum. Pellentesque commodo
                        maximus viverra
                    </span>
                    <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                        Fusce suscipit, diam in viverra tincidunt, arcu dui venenatis ipsum, ut rhoncus eros justo id
                        nunc. In metus urna, tristique id dapibus at, gravida vel nunc. Donec aliquam justo ex, a
                        ultrices dui tempor sed. Mauris dignissim, arcu eget feugiat pellentesque, est orci pretium
                        ligula, eu tristique
                    </span>
                    <span className="text-lg pt-3 text-secondary dark:text-dark-secondary">
                        est lectus posuere tellus. Aenean luctus molestie orci. Fusce elementum aliquet diam, non
                        suscipit metus tempor nec. Proin facilisis tellus
                    </span>
                </div>
                <div className="mt-[10%]">
                    <a onClick={(e) => scrollToTop(e, 2)} href="#about">
                        <JumpingMouse />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SpinningCube;

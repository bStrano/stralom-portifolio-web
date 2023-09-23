'use client';
import React, {useEffect, useState} from 'react';

function FlashLight() {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        console.log("Mouse moving")
        setPosition({
            top: e.pageY + -80,
            left: e.pageX + -80,
        });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div>

            <div
                id="light3"
                className={"w-120 h-120 bg-gradient-radial   absolute rounded-full z-20"}
                style={{ top: `${position.top - 160}px`, left: `${position.left - 160}px` }}
            />
            {/*<div*/}
            {/*    id="light2"*/}
            {/*    className="w-80 h-80 bg-cyan-500 opacity-5 absolute rounded-full z-20"*/}
            {/*    style={{ top: `${position.top - 80}px`, left: `${position.left - 80}px` }}*/}
            {/*/>*/}
            {/*<div*/}
            {/*    id="light"*/}
            {/*    className="w-40 h-40 bg-cyan-50  opacity-5 absolute rounded-full z-30"*/}
            {/*    style={{ top: `${position.top}px`, left: `${position.left}px` }}*/}
            {/*/>*/}

        </div>
    );

}

export default FlashLight;

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
                className={"w-120 h-120 bg-gradient-radial   absolute rounded-full pointer-events-none"}
                style={{ top: `${position.top - 160}px`, left: `${position.left - 160}px` }}
            />

        </div>
    );

}

export default FlashLight;

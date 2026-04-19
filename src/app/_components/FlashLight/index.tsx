'use client';
import React from 'react';
import {useMousePosition} from '@/hooks/useMousePosition';

const SIZE = 520;

function FlashLight() {
    const pos = useMousePosition();

    if (!pos) return null;

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed z-20 rounded-full"
            style={{
                width: SIZE,
                height: SIZE,
                top: pos.y - SIZE / 2,
                left: pos.x - SIZE / 2,
                background:
                    'radial-gradient(circle, rgba(255, 200, 44, 0.10) 0%, rgba(255, 73, 219, 0.06) 35%, rgba(189, 147, 249, 0.03) 60%, transparent 75%)',
                mixBlendMode: 'screen',
                filter: 'blur(2px)',
                transition: 'transform 60ms linear',
            }}
        />
    );
}

export default FlashLight;

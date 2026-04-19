'use client';
import React, {useEffect, useState} from 'react';
import {Icon} from '@iconify/react';

function ScrollHint() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY < 100);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            aria-hidden
            className="scroll-hint pointer-events-none absolute bottom-8 left-1/2 z-10 text-blue-dark-11"
            style={{
                opacity: visible ? 0.7 : 0,
                transition: 'opacity 400ms ease',
            }}
        >
            <Icon icon="mdi:chevron-down" width={28} height={28}/>

            <style jsx>{`
                .scroll-hint {
                    animation: scroll-hint-bounce 1.8s ease-in-out infinite;
                }

                @keyframes scroll-hint-bounce {
                    0%, 100% { transform: translate(-50%, 0); }
                    50%      { transform: translate(-50%, 8px); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .scroll-hint { animation: none; transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

export default ScrollHint;

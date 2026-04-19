'use client';
import React, {useEffect, useRef} from 'react';

interface IAuroraProps {
    /** Quanto (px) a aurora desloca em parallax com o cursor. Default 70. */
    intensity?: number;
}

function Aurora({intensity = 70}: IAuroraProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const blob = blobRef.current;
        if (!wrap || !blob) return;

        let raf = 0;
        let tx = 0, ty = 0;
        let cx = 0, cy = 0;

        const tick = () => {
            cx += (tx - cx) * 0.06;
            cy += (ty - cy) * 0.06;
            blob.style.transform = `translate3d(calc(-50% + ${cx}px), calc(-50% + ${cy}px), 0)`;
            if (Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3) {
                raf = requestAnimationFrame(tick);
            } else {
                raf = 0;
            }
        };

        const onMove = (e: MouseEvent) => {
            const r = wrap.getBoundingClientRect();
            const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
            const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
            tx = nx * intensity;
            ty = ny * intensity;
            if (!raf) raf = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove);
        return () => {
            window.removeEventListener('mousemove', onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [intensity]);

    return (
        <div
            ref={wrapRef}
            aria-hidden
            className="aurora-wrap pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div ref={blobRef} className="aurora-blob">
                <span className="aurora-c aurora-c-pink"/>
                <span className="aurora-c aurora-c-purple"/>
                <span className="aurora-c aurora-c-cyan"/>
            </div>

            <style jsx>{`
                .aurora-blob {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: min(110vw, 1100px);
                    height: min(110vw, 1100px);
                    transform: translate(-50%, -50%);
                    filter: blur(90px) saturate(0.85);
                    opacity: 0.55;
                    will-change: transform;
                }

                .aurora-c {
                    position: absolute;
                    border-radius: 9999px;
                    mix-blend-mode: screen;
                    will-change: transform;
                }

                .aurora-c-pink {
                    width: 55%;
                    height: 55%;
                    top: 8%;
                    left: 6%;
                    background: radial-gradient(circle, rgba(255, 73, 219, 0.45), transparent 65%);
                    animation: aurora-d1 22s ease-in-out infinite;
                }

                .aurora-c-purple {
                    width: 60%;
                    height: 60%;
                    bottom: 6%;
                    left: 22%;
                    background: radial-gradient(circle, rgba(189, 147, 249, 0.45), transparent 65%);
                    animation: aurora-d2 28s ease-in-out infinite;
                }

                .aurora-c-cyan {
                    width: 50%;
                    height: 50%;
                    top: 12%;
                    right: 4%;
                    background: radial-gradient(circle, rgba(139, 233, 253, 0.35), transparent 65%);
                    animation: aurora-d3 26s ease-in-out infinite;
                }

                @keyframes aurora-d1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%      { transform: translate(8%, -6%) scale(1.08); }
                }
                @keyframes aurora-d2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%      { transform: translate(-7%, 6%) scale(0.94); }
                }
                @keyframes aurora-d3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%      { transform: translate(5%, -8%) scale(1.05); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .aurora-c { animation: none; }
                }
            `}</style>
        </div>
    );
}

export default Aurora;

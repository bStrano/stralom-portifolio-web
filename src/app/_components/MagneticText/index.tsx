'use client';
import React, {useEffect, useRef} from 'react';

interface IMagneticTextProps {
    text: string;
    /** Raio (px) de influência ao redor de cada letra. Default 140. */
    radius?: number;
    /** Fração do deslocamento até o cursor (0..1). Default 0.35. */
    strength?: number;
    /** Classe aplicada em cada letra. */
    letterClassName?: string;
    /** Stagger (ms) entre letras na animação de entrada. Default 45. */
    enterStagger?: number;
    /** Atraso inicial (ms) antes da entrada da primeira letra. Default 80. */
    enterDelay?: number;
}

function MagneticText({text, radius = 140, strength = 0.35, letterClassName, enterStagger = 45, enterDelay = 80}: IMagneticTextProps) {
    const spansRef = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        let raf = 0;
        let cx = -9999, cy = -9999;
        const origins: Array<{x: number; y: number} | null> = [];

        const measure = () => {
            for (let i = 0; i < spansRef.current.length; i++) {
                const s = spansRef.current[i];
                if (!s) {
                    origins[i] = null;
                    continue;
                }
                const prev = s.style.transform;
                if (prev) s.style.transform = '';
                const r = s.getBoundingClientRect();
                if (prev) s.style.transform = prev;
                origins[i] = {x: r.left + r.width / 2, y: r.top + r.height / 2};
            }
        };

        const apply = () => {
            for (let i = 0; i < spansRef.current.length; i++) {
                const s = spansRef.current[i];
                const o = origins[i];
                if (!s || !o) continue;
                const dx = cx - o.x;
                const dy = cy - o.y;
                const dist = Math.hypot(dx, dy);
                if (dist < radius) {
                    const factor = (1 - dist / radius) * strength;
                    s.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
                } else if (s.style.transform) {
                    s.style.transform = '';
                }
            }
            raf = 0;
        };

        const onMove = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            if (!raf) raf = requestAnimationFrame(apply);
        };
        const onLeave = () => {
            cx = -9999;
            cy = -9999;
            if (!raf) raf = requestAnimationFrame(apply);
        };

        // initial measurement after entrance animation finishes
        const entryMs = enterDelay + text.length * enterStagger + 720 + 50;
        const initialTimer = window.setTimeout(measure, entryMs);

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);
        window.addEventListener('resize', measure);
        return () => {
            window.clearTimeout(initialTimer);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            window.removeEventListener('resize', measure);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [radius, strength, text, enterDelay, enterStagger]);

    return (
        <>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    ref={(el) => {
                        spansRef.current[i] = el;
                    }}
                    style={{
                        display: 'inline-block',
                        transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                        willChange: 'transform',
                    }}
                >
                    <span
                        className={`magnetic-letter-inner ${letterClassName ?? ''}`}
                        style={{
                            display: 'inline-block',
                            whiteSpace: 'pre',
                            animationDelay: `${enterDelay + i * enterStagger}ms`,
                        }}
                    >
                        {char}
                    </span>
                </span>
            ))}

            <style jsx>{`
                .magnetic-letter-inner {
                    opacity: 0;
                    transform: translateY(28px);
                    animation: magnetic-letter-in 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                @keyframes magnetic-letter-in {
                    0% {
                        opacity: 0;
                        transform: translateY(28px);
                        filter: blur(6px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .magnetic-letter-inner {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </>
    );
}

export default MagneticText;

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
}

function MagneticText({text, radius = 140, strength = 0.35, letterClassName}: IMagneticTextProps) {
    const spansRef = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        let raf = 0;
        let cx = -9999, cy = -9999;

        const apply = () => {
            for (const s of spansRef.current) {
                if (!s) continue;
                const r = s.getBoundingClientRect();
                const lx = r.left + r.width / 2;
                const ly = r.top + r.height / 2;
                const dx = cx - lx;
                const dy = cy - ly;
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

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [radius, strength]);

    return (
        <>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    ref={(el) => {
                        spansRef.current[i] = el;
                    }}
                    className={letterClassName}
                    style={{
                        display: 'inline-block',
                        whiteSpace: 'pre',
                        transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                        willChange: 'transform',
                    }}
                >
                    {char}
                </span>
            ))}
        </>
    );
}

export default MagneticText;

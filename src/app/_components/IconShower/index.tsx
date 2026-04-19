'use client';
import React, {useEffect, useMemo, useState} from 'react';
import {Icon} from '@iconify/react';

interface IIconShowerProps {
    items: string[];
    /** Total ícones em tela. Default 60. */
    count?: number;
}

interface FallingIcon {
    id: number;
    icon: string;
    leftPercent: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    blur: number;
    rotateFrom: number;
    rotateTo: number;
    drift: number;
}

const LAYERS = [
    {sizeRange: [16, 22], opacityRange: [0.18, 0.28], blurRange: [1.2, 2.0], durationRange: [16, 24]},
    {sizeRange: [26, 36], opacityRange: [0.28, 0.42], blurRange: [0.3, 0.8], durationRange: [12, 18]},
    {sizeRange: [40, 56], opacityRange: [0.42, 0.62], blurRange: [0, 0.2], durationRange: [9, 14]},
] as const;

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

function buildIcons(items: string[], count: number): FallingIcon[] {
    return Array.from({length: count}, (_, i) => {
        const layer = LAYERS[i % LAYERS.length];
        const duration = rand(layer.durationRange[0], layer.durationRange[1]);
        return {
            id: i,
            icon: items[Math.floor(Math.random() * items.length)],
            leftPercent: rand(0, 100),
            size: rand(layer.sizeRange[0], layer.sizeRange[1]),
            duration,
            delay: -rand(0, duration),
            opacity: rand(layer.opacityRange[0], layer.opacityRange[1]),
            blur: rand(layer.blurRange[0], layer.blurRange[1]),
            rotateFrom: rand(-12, 12),
            rotateTo: rand(-12, 12),
            drift: rand(-40, 40),
        };
    });
}

function IconShower({items, count = 60}: IIconShowerProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const icons = useMemo(() => (mounted ? buildIcons(items, count) : []), [mounted, items, count]);

    if (!mounted) return null;

    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {icons.map((it) => (
                <span
                    key={it.id}
                    className="icon-shower-item absolute top-0 will-change-transform"
                    style={{
                        left: `${it.leftPercent}%`,
                        opacity: it.opacity,
                        filter: it.blur ? `blur(${it.blur}px)` : undefined,
                        animationDuration: `${it.duration}s`,
                        animationDelay: `${it.delay}s`,
                        ['--rot-from' as any]: `${it.rotateFrom}deg`,
                        ['--rot-to' as any]: `${it.rotateTo}deg`,
                        ['--drift' as any]: `${it.drift}px`,
                    }}
                >
                    <Icon icon={it.icon} width={it.size} height={it.size}/>
                </span>
            ))}

            <style jsx>{`
                @keyframes icon-fall {
                    0% {
                        transform: translate3d(0, -10vh, 0) rotate(var(--rot-from));
                    }
                    25% {
                        transform: translate3d(calc(var(--drift) * 0.25), 20vh, 0) rotate(calc(var(--rot-from) * -1));
                    }
                    50% {
                        transform: translate3d(calc(var(--drift) * 0.5), 50vh, 0) rotate(var(--rot-from));
                    }
                    75% {
                        transform: translate3d(calc(var(--drift) * 0.75), 80vh, 0) rotate(calc(var(--rot-from) * -1));
                    }
                    100% {
                        transform: translate3d(var(--drift), 110vh, 0) rotate(var(--rot-to));
                    }
                }

                .icon-shower-item {
                    animation-name: icon-fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .icon-shower-item {
                        animation: none;
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default IconShower;

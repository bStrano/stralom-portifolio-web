'use client';
import {useEffect, useState} from 'react';

export interface MousePosition {
    x: number;
    y: number;
}

export function useMousePosition(): MousePosition | null {
    const [pos, setPos] = useState<MousePosition | null>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => setPos({x: e.clientX, y: e.clientY});
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    return pos;
}

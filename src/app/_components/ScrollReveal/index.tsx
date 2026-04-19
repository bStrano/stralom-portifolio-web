'use client';
import React, {useEffect, useRef, useState} from 'react';

interface IScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delayMs?: number;
    style?: React.CSSProperties;
    as?: 'div' | 'article' | 'section';
    threshold?: number;
}

function ScrollReveal({
                          children,
                          className = '',
                          delayMs = 0,
                          style,
                          as = 'div',
                          threshold = 0.12,
                      }: IScrollRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            {threshold, rootMargin: '0px 0px -8% 0px'}
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    const mergedStyle: React.CSSProperties = {
        ...style,
        transitionDelay: `${delayMs}ms`,
    };

    const Component = as as React.ElementType;

    return (
        <Component
            ref={ref as React.Ref<any>}
            data-visible={visible}
            style={mergedStyle}
            className={`scroll-reveal ${className}`}
        >
            {children}
        </Component>
    );
}

export default ScrollReveal;

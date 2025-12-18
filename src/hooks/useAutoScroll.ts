import { useEffect, useRef } from 'react';

export function useAutoScroll(speed: number = 0.5) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isHovered = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;

        const scroll = () => {
            if (container && !isHovered.current) {
                // If we reached the end, reset to 0
                // We use a small buffer (1px) to avoid precision issues
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += speed;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        // Use a timeout to ensure layout is settled before starting
        const timeoutId = setTimeout(() => {
            animationId = requestAnimationFrame(scroll);
        }, 100);

        const handleMouseEnter = () => { isHovered.current = true; };
        const handleMouseLeave = () => { isHovered.current = false; };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        // Also pause on touchstart for mobile
        container.addEventListener('touchstart', handleMouseEnter, { passive: true });
        container.addEventListener('touchend', handleMouseLeave);


        return () => {
            cancelAnimationFrame(animationId);
            clearTimeout(timeoutId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('touchstart', handleMouseEnter);
            container.removeEventListener('touchend', handleMouseLeave);
        };
    }, [speed]);

    return containerRef;
}

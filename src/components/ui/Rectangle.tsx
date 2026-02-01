import { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface RectangleProps {
    /**
     * Background color of the rectangle
     * Can be any valid CSS color value (hex, rgb, named color, etc.)
     */
    color?: string;

    /**
     * Width of the rectangle in pixels
     */
    width?: number;

    /**
     * Height of the rectangle in pixels
     */
    height?: number;

    /**
     * Rotation angle in degrees
     */
    rotation?: number;

    /**
     * Border radius in pixels
     */
    borderRadius?: number;

    /**
     * Position from top (in pixels or percentage)
     */
    top?: string | number;

    /**
     * Position from left (in pixels or percentage)
     */
    left?: string | number;

    /**
     * Position from right (in pixels or percentage)
     */
    right?: string | number;

    /**
     * Position from bottom (in pixels or percentage)
     */
    bottom?: string | number;

    /**
     * Opacity value (0 to 1)
     */
    opacity?: number;

    /**
     * CSS mix-blend-mode
     */
    blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten';

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * z-index value
     */
    zIndex?: number;

    /**
     * Whether to hide on mobile (lg breakpoint)
     */
    hideOnMobile?: boolean;

    /**
     * Whether to hide on desktop (lg breakpoint)
     */
    hideOnDesktop?: boolean;

    /**
     * Whether to hide on tablet (between lg and xl breakpoints: 1024px-1279px)
     */
    hideOnTablet?: boolean;

    /**
     * Whether to show only on tablet (between lg and xl breakpoints: 1024px-1279px)
     */
    showOnlyTablet?: boolean;

    /**
     * Enable continuous rotation animation
     */
    animate?: boolean;

    /**
     * Animation duration in seconds (default: 20)
     */
    animationDuration?: number;

    /**
     * Animation direction: 'normal' (clockwise) or 'reverse' (counter-clockwise)
     */
    animationDirection?: 'normal' | 'reverse';
}

const Rectangle = ({
    color = '#F7DBA7',
    width = 635,
    height = 635,
    rotation = 0,
    borderRadius = 99,
    top,
    left,
    right,
    bottom,
    opacity = 1,
    blendMode = 'normal',
    className,
    zIndex = 0,
    hideOnMobile = false,
    hideOnDesktop = false,
    hideOnTablet = false,
    showOnlyTablet = false,
    animate = false,
    animationDuration = 20,
    animationDirection = 'normal',
}: RectangleProps) => {
    const style: CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        borderRadius: `${borderRadius}px`,
        transform: `rotate(${rotation}deg)`,
        top: typeof top === 'number' ? `${top}px` : top,
        left: typeof left === 'number' ? `${left}px` : left,
        right: typeof right === 'number' ? `${right}px` : right,
        bottom: typeof bottom === 'number' ? `${bottom}px` : bottom,
        opacity,
        mixBlendMode: blendMode,
        zIndex,
        ...(animate && {
            animation: `rotate-rectangle ${animationDuration}s linear infinite`,
            animationDirection: animationDirection,
        }),
    };

    const baseClasses = "absolute pointer-events-none";
    const responsiveClasses = cn(
        hideOnMobile && "hidden lg:block",
        hideOnDesktop && "lg:hidden",
        hideOnTablet && "lg:hidden xl:block",
        showOnlyTablet && "hidden lg:block xl:hidden"
    );

    return (
        <div
            className={cn(baseClasses, responsiveClasses, className)}
            style={style}
        />
    );
};

export { Rectangle };
export type { RectangleProps };

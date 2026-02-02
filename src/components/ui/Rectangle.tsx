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

    /**
     * Responsive properties for tablet breakpoint (default: 450px-1023px)
     */
    tablet?: {
        width?: number;
        height?: number;
        borderRadius?: number;
        top?: string | number;
        left?: string | number;
        right?: string | number;
        bottom?: string | number;
        zIndex?: number;
    };

    /**
     * Custom breakpoint range for tablet styles (overrides default 450px-1023px)
     */
    customBreakpoint?: {
        minWidth: number;
        maxWidth: number;
    };
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
    tablet,
    customBreakpoint,
}: RectangleProps) => {
    // Generate unique ID for this rectangle instance
    const uniqueId = `rect-${Math.random().toString(36).substr(2, 9)}`;

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

    // Generate tablet-specific styles if tablet prop is provided
    const minWidth = customBreakpoint?.minWidth ?? 450;
    const maxWidth = customBreakpoint?.maxWidth ?? 1023;

    const tabletStyles = tablet ? `
        @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
            .${uniqueId} {
                ${tablet.width !== undefined ? `width: ${tablet.width}px !important;` : ''}
                ${tablet.height !== undefined ? `height: ${tablet.height}px !important;` : ''}
                ${tablet.borderRadius !== undefined ? `border-radius: ${tablet.borderRadius}px !important;` : ''}
                ${tablet.top !== undefined ? `top: ${typeof tablet.top === 'number' ? `${tablet.top}px` : tablet.top} !important;` : ''}
                ${tablet.left !== undefined ? `left: ${typeof tablet.left === 'number' ? `${tablet.left}px` : tablet.left} !important;` : ''}
                ${tablet.right !== undefined ? `right: ${typeof tablet.right === 'number' ? `${tablet.right}px` : tablet.right} !important;` : ''}
                ${tablet.bottom !== undefined ? `bottom: ${typeof tablet.bottom === 'number' ? `${tablet.bottom}px` : tablet.bottom} !important;` : ''}
                ${tablet.zIndex !== undefined ? `z-index: ${tablet.zIndex} !important;` : ''}
            }
        }
    ` : '';

    return (
        <>
            {tablet && <style dangerouslySetInnerHTML={{ __html: tabletStyles }} />}
            <div
                className={cn(baseClasses, responsiveClasses, className, uniqueId)}
                style={style}
            />
        </>
    );
};

export { Rectangle };
export type { RectangleProps };

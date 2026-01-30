import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils'; // We need to create this util or just use clsx/tailwind-merge inline if simple. I'll create the util.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-[57px] cta-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-monito-blue text-white hover:bg-monito-blue/90",
            secondary: "bg-monito-yellow text-monito-blue hover:bg-monito-yellow/90",
            outline: "border-[1.5px] border-monito-blue text-monito-blue hover:bg-monito-blue/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-[48px] px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

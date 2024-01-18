import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background m-1',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent',
                link: 'underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 py-2 px-3',
                sm: 'h-9 px-3 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                xl: 'h-12 px-10 rounded-md',
                '2xl': 'h-14 px-10 rounded-md',
                '3xl': 'h-16 px-12 rounded-md',
                '4xl': 'h-20 px-12 rounded-md',
            },
            font: {
                default: 'text-base',
                xs: 'text-xs',
                sm: 'text-sm',
                lg: 'text-lg',
                xl: 'text-xl',
                '2xl': 'text-2xl',
                '3xl': 'text-3xl',
                '4xl': 'text-4xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            font: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

import Image from 'next/image';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { PlayCircle } from 'lucide-react';
import { Container } from './Container';

interface FeatureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imagePosition?: 'left' | 'right';
    variant?: 'default' | 'dark-blue';
    backgroundColor?: string;
    shape1Color?: string;
    shape2Color?: string;
    swapShapes?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}

const FeatureSection = ({
    title,
    subtitle,
    description,
    image,
    imagePosition = 'right',
    variant = 'default',
    backgroundColor = '#003459',
    shape1Color = '#FCEED5',
    shape2Color = '#002A48',
    swapShapes = false,
    textAlign = 'left'
}: FeatureSectionProps) => {

    const alignmentClasses = {
        left: "items-center lg:items-start text-center lg:text-left",
        center: "items-center text-center",
        right: "items-center lg:items-end text-center lg:text-right"
    };

    if (variant === 'dark-blue') {
        return (
            <Container className="py-8">
                <section
                    className="relative overflow-hidden rounded-[20px] w-full min-h-[378px] flex flex-col lg:flex-row items-center justify-between"
                    style={{ backgroundColor: backgroundColor }}
                >
                    {/* Decorative Square 1 (Standard: Right Side. Swap: Left Side) */}
                    <div
                        className={cn(
                            "absolute lg:-bottom-[44px] bottom-[265px] w-[787px] h-[787px] rounded-[99px] rotate-[34deg] z-0 opacity-100 pointer-events-none",
                            swapShapes ? "lg:-left-[196px]" : "lg:-right-[196px]"
                        )}
                        style={{ backgroundColor: shape1Color }}
                    ></div>

                    {/* Decorative Square 2 (Standard: Left Side. Swap: Right Side) */}
                    <div
                        className={cn(
                            "absolute lg:-bottom-[360px] bottom-[-630px] w-[782px] h-[635px] rounded-[99px] rotate-[35deg] z-0 opacity-100 pointer-events-none",
                            swapShapes ? "lg:-right-[215px]" : "lg:-left-[215px]"
                        )}
                        style={{ backgroundColor: shape2Color }}
                    ></div>

                    {/* Content (Left on Desktop, Top on Mobile) */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-1/2 lg:px-[80px] px-4 py-[40px] flex flex-col space-y-6 order-1",
                        alignmentClasses[textAlign],
                        imagePosition === 'left' ? "lg:order-2" : "lg:order-1"
                    )}>
                        <div className="lg:space-y-4 space-y-2">
                            <h2 className="text-[36px] lg:text-[52px] font-bold text-[#003459] leading-tight">
                                {title}
                            </h2>
                            <h3 className="text-[24px] lg:text-[36px] font-semibold text-[#003459] leading-tight capitalize">
                                {subtitle}
                            </h3>
                            <p className="text-[#242B33] text-sm font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-row justify-center lg:justify-start gap-3 lg:gap-[20px] w-full">
                            <Button variant="outline" className="border-[#003459] text-[#003459] hover:bg-white/10 px-6 lg:px-8">
                                View Intro <PlayCircle size={20} className="ml-2" />
                            </Button>
                            <Button variant="primary" className="bg-[#003459] text-white hover:bg-[#003459]/90">
                                Explore Now
                            </Button>
                        </div>
                    </div>

                    {/* Image (Right on Desktop, Bottom on Mobile) */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-1/2 h-full flex justify-center items-end order-2",
                        imagePosition === 'left' ? "lg:order-1" : "lg:order-2"
                    )}>
                        <div className="relative w-full aspect-[4/3] lg:h-[500px]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </Container>
        );
    }

    // Default variant
    return (
        <Container className="py-[60px]">
            <div className={cn(
                "bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-2 items-center relative",
            )}>
                {/* Content Side */}
                <div className={cn(
                    "p-8 lg:p-12 space-y-6 order-2",
                    imagePosition === 'left' ? "lg:order-2" : "lg:order-1"
                )}>
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-[52px] font-extrabold text-monito-blue leading-tight mb-2">
                            {title}
                        </h1>
                        <h2 className="text-lg font-bold text-monito-dark-gray uppercase tracking-widest">
                            {subtitle}
                        </h2>
                        <p className="text-monito-dark-gray text-sm lg:text-base font-medium leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="outline" className="gap-2">
                            View Intro <PlayCircle size={20} className="fill-current" />
                        </Button>
                        <Button variant="primary">
                            Explore Now
                        </Button>
                    </div>
                </div>

                {/* Image Side */}
                <div className={cn(
                    "relative h-full min-h-[300px] lg:min-h-[400px] order-1",
                    imagePosition === 'left' ? "lg:order-1" : "lg:order-2"
                )}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </Container>
    );
};

export default FeatureSection;

import Image from 'next/image';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Rectangle } from './ui/Rectangle';

interface FeatureSectionProps {
    title: string;
    titleIcon?: React.ReactNode;
    subtitle: string;
    description: string | React.ReactNode;
    image: string;
    imagePosition?: 'left' | 'right';
    variant?: 'default' | 'dark-blue';
    backgroundColor?: string;
    decorativeShapes?: React.ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    buttonAlign?: 'left' | 'center' | 'end';
    imageSpacing?: number | { top?: number; right?: number; bottom?: number; left?: number };
    imageWidth?: string;
    imageHeight?: string;
    swapButtons?: boolean;
}

const FeatureSection = ({
    title,
    titleIcon,
    subtitle,
    description,
    image,
    imagePosition = 'right',
    variant = 'default',
    backgroundColor = '#003459',
    decorativeShapes,
    textAlign = 'left',
    buttonAlign = 'left',
    imageSpacing = 0,
    imageWidth,
    imageHeight,
    swapButtons = false
}: FeatureSectionProps) => {

    const alignmentClasses = {
        left: "items-center lg:items-start text-center lg:text-left",
        center: "items-center text-center",
        right: "items-center lg:items-end text-center lg:text-right"
    };

    const buttonAlignmentClasses = {
        left: "justify-center lg:justify-start",
        center: "justify-center",
        end: "justify-center lg:justify-end"
    };

    // Handle imageSpacing - can be a number or object with individual sides
    const getImagePadding = () => {
        if (typeof imageSpacing === 'number') {
            return `${imageSpacing}px`;
        }
        const { top = 0, right = 0, bottom = 0, left = 0 } = imageSpacing || {};
        return `${top}px ${right}px ${bottom}px ${left}px`;
    };

    if (variant === 'dark-blue') {
        return (
            <Container className="pt-[32px] pb-[60px]">
                <section
                    className="relative overflow-hidden rounded-[20px] w-full min-h-[378px] lg:h-[378px] flex flex-col lg:flex-row items-center justify-between"
                    style={{ backgroundColor: backgroundColor }}
                >
                    {/* Decorative Shapes */}
                    {decorativeShapes}

                    {/* Content (Left on Desktop, Top on Mobile) */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-1/2 xl:px-[80px] px-8 py-[40px] sm:py-[64px] flex flex-col space-y-6 order-1",
                        alignmentClasses[textAlign],
                        imagePosition === 'left' ? "lg:order-2" : "lg:order-1"
                    )}>
                        <div className="space-y-2">
                            <h2 className="text-[36px] lg:text-[52px] font-extrabold text-[#003459] leading-tight flex items-center justify-center lg:justify-start gap-3">
                                {title}
                                {titleIcon && titleIcon}
                            </h2>
                            <h3 className="text-[24px] lg:text-[36px] font-bold text-[#003459] leading-tight capitalize">
                                {subtitle}
                            </h3>
                            <p className="text-[#242B33] text-[12px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                                {description}
                            </p>
                        </div>

                        <div className={cn("flex flex-row flex-nowrap gap-3 lg:gap-[20px] w-full lg:w-auto", buttonAlignmentClasses[buttonAlign])}>
                            {swapButtons ? (
                                <>
                                    <Button variant="primary" className="bg-[#003459] text-white hover:bg-[#003459]/90 whitespace-nowrap">
                                        Explore Now
                                    </Button>
                                    <Button variant="outline" className="border-[#003459] text-[#003459] hover:bg-white/10 px-6 lg:px-8 whitespace-nowrap">
                                        View Intro <Image src="/images/play-icon.png" alt="Play" width={18} height={18} className="ml-2" />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" className="border-[#003459] text-[#003459] hover:bg-white/10 px-6 lg:px-8 whitespace-nowrap">
                                        View Intro <Image src="/images/play-icon.png" alt="Play" width={18} height={18} className="ml-2" />
                                    </Button>
                                    <Button variant="primary" className="bg-[#003459] text-white hover:bg-[#003459]/90 whitespace-nowrap">
                                        Explore Now
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Image (Right on Desktop, Bottom on Mobile) */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-1/2 h-full flex justify-center items-end order-2",
                        imagePosition === 'left' ? "lg:order-1" : "lg:order-2"
                    )}
                        style={{ padding: getImagePadding() }}
                    >
                        <div
                            className="relative w-full aspect-[4/3] lg:h-[500px]"
                            style={{
                                ...(imageWidth && { width: imageWidth }),
                                ...(imageHeight && { height: imageHeight })
                            }}
                        >
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
                        {swapButtons ? (
                            <>
                                <Button variant="primary">
                                    Explore Now
                                </Button>
                                <Button variant="outline" className="gap-2">
                                    View Intro <Image src="/images/play-icon.png" alt="Play" width={18} height={18} />
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline" className="gap-2">
                                    View Intro <Image src="/images/play-icon.png" alt="Play" width={18} height={18} />
                                </Button>
                                <Button variant="primary">
                                    Explore Now
                                </Button>
                            </>
                        )}
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

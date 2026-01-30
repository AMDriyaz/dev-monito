import Image from 'next/image';
import { Button } from './ui/Button';
import { PlayCircle } from 'lucide-react';
import { Container } from './Container';

const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden bg-monito-cream pt-[100px] lg:pt-[60px] lg:min-h-[600px] rounded-b-[40px] lg:rounded-b-[0px]">
            {/* Background Gradient Approximation */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)' }}>
            </div>

            {/* Decorative Elements - Mobile */}
            <div className="absolute lg:hidden w-[529px] h-[529px] bg-[#F7DBA7] rounded-[48px] rotate-[16deg] top-[620px] left-[-11px] z-0 opacity-40 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute lg:hidden w-[529px] h-[529px] bg-[#003459] rounded-[48px] rotate-[36deg] top-[548px] left-[218px] z-0 opacity-100 pointer-events-none"></div>

            {/* Decorative Elements - Desktop */}
            <div className="hidden lg:block absolute w-[635px] h-[635px] bg-[#F7DBA7] rounded-[99px] rotate-[25.23deg] top-[-601px] left-[-251px] z-0 pointer-events-none"></div>
            <div className="hidden lg:block absolute w-[635px] h-[635px] bg-[#003459] rounded-[99px] rotate-[14deg] top-[349px] right-[109px] z-0 pointer-events-none"></div>
            <div className="hidden lg:block absolute w-[635px] h-[635px] bg-[#F7DBA7] rounded-[99px] rotate-[28deg] top-[301px] right-[60px] z-0 pointer-events-none"></div>

            <Container className="relative z-10 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5 relative z-20 flex flex-col items-start lg:pb-0">
                        <div className="relative mb-6">
                            <h1 className="text-[46px] lg:text-[60px] font-black leading-[60px] lg:leading-[68px] text-monito-blue mb-2">
                                One More Friend
                            </h1>
                            <h2 className="text-[28px] lg:text-[46px] font-bold leading-[38px] lg:leading-[60px] text-monito-blue">
                                Thousands More Fun!
                            </h2>
                        </div>

                        <p className="text-monito-neutral-80 text-[12px] lg:text-[16px] font-medium leading-[18px] lg:leading-[24px] mb-8 max-w-[480px]">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </p>

                        <div className="flex flex-row gap-4 w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="rounded-[57px] px-8 h-[48px] lg:h-[52px] border-[1.5px] border-monito-blue text-monito-blue font-medium text-[14px] lg:text-[16px] flex gap-2 items-center bg-transparent hover:bg-monito-blue/5"
                            >
                                View Intro <PlayCircle size={18} className="fill-monito-blue stroke-white" />
                            </Button>
                            <Button
                                variant="primary"
                                className="rounded-[57px] px-8 h-[48px] lg:h-[52px] bg-monito-blue text-white font-medium text-[14px] lg:text-[16px] hover:bg-monito-blue/90"
                            >
                                Explore Now
                            </Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:col-span-7 relative w-full h-full flex items-end justify-center lg:justify-end min-h-[300px] lg:min-h-[600px]">

                        {/* Desktop Image */}
                        <div className="hidden lg:block relative w-[800px] h-[600px] -mr-[100px] -mb-[40px] z-10">
                            <Image
                                src="/images/hero_woman_corgi.png"
                                alt="Woman holding Corgi"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="lg:hidden relative w-full h-full z-10">
                            <Image
                                src="/images/groupdogs.png"
                                alt="Group of dogs"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default HeroBanner;

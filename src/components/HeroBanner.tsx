import Image from 'next/image';
import { Button } from './ui/Button';
import { PlayCircle } from 'lucide-react';
import { Container } from './Container';
import { Rectangle } from './ui/Rectangle';

const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden bg-monito-cream pt-[100px] lg:pt-[60px] lg:min-h-[600px] rounded-b-[40px]">
            {/* Background Gradient Approximation */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)' }}>
            </div>

            <Container className="relative z-10 h-full">
                {/* Decorative Elements - Mobile */}
                <Rectangle
                    color="#003459"
                    width={635}
                    height={635}
                    rotation={23}
                    borderRadius={48}
                    top={454}
                    left={-73}
                    blendMode="multiply"
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={28}
                    animationDirection="normal"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={635}
                    height={635}
                    rotation={48}
                    borderRadius={48}
                    top={415}
                    left={11.9}
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={32}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={635}
                    height={635}
                    rotation={15}
                    borderRadius={48}
                    bottom={616}
                    left={-254.1}
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={32}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={15}
                    height={15}
                    rotation={58}
                    borderRadius={4}
                    top={70}
                    right={76}
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={14}
                    height={14}
                    rotation={58}
                    borderRadius={4}
                    top={46}
                    right={36}
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#002A48"
                    width={12}
                    height={12}
                    rotation={40}
                    borderRadius={4}
                    top={78}
                    right={82}
                    hideOnDesktop={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />


                {/* Decorative Elements - Desktop */}
                <Rectangle
                    color="#F7DBA7"
                    width={635}
                    height={635}
                    rotation={25.23}
                    borderRadius={99}
                    top={-639}
                    left={-336}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={30}
                    animationDirection="normal"
                />
                <Rectangle
                    color="#003459"
                    width={635}
                    height={635}
                    rotation={8}
                    borderRadius={99}
                    top={267}
                    right={118}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={15}
                    height={15}
                    rotation={8}
                    borderRadius={5}
                    top={79}
                    right={584}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={25}
                    height={25}
                    rotation={58}
                    borderRadius={7}
                    top={140}
                    right={613}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#002A48"
                    width={21}
                    height={21}
                    rotation={40}
                    borderRadius={7}
                    top={148}
                    right={619}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={61}
                    height={61}
                    rotation={22}
                    borderRadius={20}
                    top={146}
                    left={43}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={635}
                    height={635}
                    rotation={22}
                    borderRadius={99}
                    top={604}
                    left={-126.1}
                    opacity={0.4}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={25}
                    animationDirection="reverse"
                />
                <Rectangle
                    color="#F7DBA7"
                    width={635}
                    height={635}
                    rotation={28}
                    borderRadius={99}
                    top={229}
                    right={51}
                    hideOnMobile={true}
                    animate={false}
                    animationDuration={35}
                    animationDirection="normal"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5 relative z-20 flex flex-col items-start sm:items-center lg:items-start lg:pb-0">
                        <div className="relative lg:mb-6 mb-3 text-left sm:text-center lg:text-left">
                            <h1 className="text-[46px] lg:text-[60px] font-extrabold leading-[60px] lg:leading-[68px] text-monito-blue">
                                One More Friend
                            </h1>
                            <h2 className="text-[28px] lg:text-[46px] font-bold leading-[38px] lg:leading-[60px] text-monito-blue">
                                Thousands More Fun!
                            </h2>
                        </div>

                        <p className="text-monito-neutral-80 text-[12px] lg:text-[16px] font-medium leading-[18px] lg:leading-[24px] lg:mb-8 mb-[32px] max-w-[480px] text-left sm:text-center lg:text-left">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </p>

                        <div className="flex flex-row gap-4 w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="rounded-[57px] px-[35px] py-[14px] border-[1.5px] border-monito-blue text-monito-blue font-medium text-[14px] lg:text-[16px] flex gap-2 items-center bg-transparent hover:bg-monito-blue/5"
                            >
                                View Intro <PlayCircle size={18} className="fill-transparent stroke-monito-blue" strokeWidth={2} />
                            </Button>
                            <Button
                                variant="primary"
                                className="rounded-[57px] px-[35px] py-[14px] bg-[#003459] text-white font-medium text-[14px] lg:text-[16px] hover:bg-monito-blue/90"
                            >
                                Explore Now
                            </Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:col-span-7 relative w-full h-full flex items-end justify-center lg:justify-end min-h-[300px] lg:min-h-[600px]">

                        {/* Desktop Image */}
                        <div className="hidden lg:block relative w-full lg:w-[700px] xl:min-w-[935px] xl:w-[935px] h-[600px] lg:top-0 lg:left-0 xl:top-[30px] xl:left-[124px] z-10">
                            <Image
                                src="/images/hero_woman_corgi.png"
                                alt="Woman holding Corgi"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="lg:hidden relative w-screen h-full z-10 -mx-4 sm:-mx-6">
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

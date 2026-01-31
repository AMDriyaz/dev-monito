import HeroBanner from '@/components/HeroBanner';

import PetCard from '@/components/PetCard';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import PetSellers from '@/components/PetSellers';
import { Rectangle } from '@/components/ui/Rectangle';

const puppies = [
    {
        id: "MO231",
        name: "Pomeranian White",
        gender: "Male",
        age: "02 months",
        price: "6.900.000 VND",
        image: "/images/dog-image-1.png", // Reuse for now or generate more later
    },
    {
        id: "MO502",
        name: "Poodle Tiny Yellow",
        gender: "Female",
        age: "02 months",
        price: "3.900.000 VND",
        image: "/images/dog-image-2.png",
    },
    {
        id: "MO102",
        name: "Poodle Tiny Sepia",
        gender: "Male",
        age: "02 months",
        price: "4.000.000 VND",
        image: "/images/dog-image-3.png",
    },
    {
        id: "MO512",
        name: "Alaskan Malamute Grey",
        gender: "Male",
        age: "02 months",
        price: "8.900.000 VND",
        image: "/images/dog-image-4.png",
    },
    {
        id: "MO231",
        name: "Pembroke Corgi",
        gender: "Male",
        age: "02 months",
        price: "7.900.000 VND",
        image: "/images/dog-image-5.png",
    },
    {
        id: "MO502",
        name: "Pembroke Corgi",
        gender: "Female",
        age: "02 months",
        price: "9.000.000 VND",
        image: "/images/dog-image-6.png",
    },
    {
        id: "MO231",
        name: "Pomeranian White",
        gender: "Female",
        age: "02 months",
        price: "6.500.000 VND",
        image: "/images/dog-image-7.png",
    },
    {
        id: "MO502",
        name: "Poodle Tiny",
        gender: "Female",
        age: "02 months",
        price: "5.000.000 VND",
        image: "/images/dog-image-8.png",
    },
] as const;

export default function Home() {
    return (
        <div className="">
            <HeroBanner />

            <Container className="py-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="text-black font-medium mb-1">Whats new?</h3>
                        <h2 className="text-2xl font-bold text-monito-blue">Take A Look At Some Of Our Pets</h2>
                    </div>
                    <Button variant="outline" className="hidden lg:flex gap-1 border-monito-blue rounded-full px-8">
                        View All <ChevronRight size={16} />
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                    {puppies.map((puppy, i) => (
                        <PetCard key={i} {...puppy} />
                    ))}
                </div>

                <div className="mt-8 flex justify-center lg:hidden">
                    <Button variant="outline" className="w-full gap-1 border-monito-blue rounded-full">
                        View All <ChevronRight size={16} />
                    </Button>
                </div>
            </Container>

            <FeatureSection
                title="One More Friend"
                subtitle="Thousands More Fun!"
                description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                image="/images/feature_woman_dog.png"
                imagePosition="left"
                variant="dark-blue"
                textAlign="right"
                buttonAlign="end"
                imageWidth="513px"
                imageHeight="342px"
                decorativeShapes={
                    <>
                        <Rectangle color="#FCEED5" width={787} height={787} rotation={118} borderRadius={99} bottom={-44} right={-196} className="lg:block hidden" />
                        <Rectangle color="#FCEED5" width={787} height={787} rotation={118} borderRadius={99} bottom={348} right={-196} className="lg:hidden" />
                        <Rectangle color="#002A48" width={787} height={787} rotation={118} borderRadius={99} bottom={-630} opacity={0.4} left={-137} className="lg:block hidden" />
                        <Rectangle color="#002A48" width={782} height={782} rotation={118} borderRadius={99} bottom={-697} left={-137} className="lg:hidden" />
                    </>
                }
            />

            <PetSellers />

            <div className="lg:block hidden">
                <FeatureSection
                    title="Adoption"
                    subtitle="We need help. so do they."
                    description="Adopt a pet and give it a home, it will be love you back unconditionally."
                    image="/images/handdog.png"
                    imagePosition="right"
                    variant="dark-blue"
                    backgroundColor='#FFB775'
                    decorativeShapes={
                        <>
                            <Rectangle color="#FCEED5" width={787} height={787} rotation={60} borderRadius={99} bottom={-44} left={-196} className="lg:block hidden" />
                            <Rectangle color="#FCEED5" width={787} height={787} rotation={60} borderRadius={99} bottom={265} left={-196} className="lg:hidden" />
                            <Rectangle color="#FCEED5" width={787} height={787} rotation={60} borderRadius={99} bottom={-630} opacity={0.4} right={-137} className="lg:block hidden" />
                            <Rectangle color="#FCEED5" width={782} height={782} rotation={60} borderRadius={99} bottom={-630} right={-137} className="lg:hidden" />
                        </>
                    }
                />
            </div>
        </div>
    );
}

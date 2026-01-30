import Image from 'next/image';
import { Button } from './ui/Button';
import { Container } from './Container';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Placeholder logos (using text/colored blocks if no images available, or assume images exist)
// User uploaded an image showing logos: Sheba, Whiskas, Bakers, Felix, Good Boy, Butcher's, Pedigree.
// I will attempt to use text or generic placeholders, but I'll set src to likely paths if user provided assets, OR use a grayscale/contrast filter on generic images.
// Given I have no assets, I'll use text labels inside styled divs for now to match the layout structure.

const sellers = [
    { name: 'Sheba', src: '/images/brand1.png' },
    { name: 'Whiskas', src: '/images/brand2.png' },
    { name: 'Bakers', src: '/images/brand3.png' },
    { name: 'Felix', src: '/images/brand4.png' },
    { name: 'Good Boy', src: '/images/brand5.png' },
    { name: 'Butchers', src: '/images/brand6.png' },
];

const PetSellers = () => {
    return (
        <section className="py-8 lg:py-12">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4 lg:gap-0">
                    <div className="flex items-center gap-2">
                        <span className="text-[#000000] font-medium">Proud to be part of</span>
                        <h2 className="text-2xl font-bold text-monito-blue">Pet Sellers</h2>
                    </div>
                    <Button variant="outline" className="hidden lg:flex gap-1 border-monito-blue rounded-full px-6">
                        View all our sellers <ChevronRight size={16} />
                    </Button>
                </div>

                {/* Desktop Grid (Hidden on Mobile) */}
                <div className="hidden lg:flex justify-between items-center gap-8">
                    {sellers.map((seller, i) => (
                        <div key={i} className="h-20 w-32 flex items-center justify-center relative">
                            <Image
                                src={seller.src}
                                alt={seller.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile Marquee (Visible on Mobile) */}
                <div className="lg:hidden w-full overflow-hidden relative">
                    <div className="animate-scroll gap-12 items-center flex">
                        {/* Duplicate lists for infinite scroll effect */}
                        {[...sellers, ...sellers].map((seller, i) => (
                            <div key={i} className="h-16 w-[100px] shrink-0 flex items-center justify-center relative">
                                <Image
                                    src={seller.src}
                                    alt={seller.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default PetSellers;

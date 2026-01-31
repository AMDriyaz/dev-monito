import { Rectangle } from '@/components/ui/Rectangle';

/**
 * Example page demonstrating various Rectangle component configurations
 * This shows how easy it is to customize colors, sizes, rotations, and positions
 */
const RectangleExamples = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-4xl font-bold text-monito-blue mb-8">Rectangle Component Examples</h1>

            {/* Example 1: Basic Rectangles with Different Colors */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">1. Different Colors</h2>
                <div className="relative h-[300px] bg-monito-cream rounded-lg overflow-hidden">
                    <Rectangle
                        color="#003459"
                        width={200}
                        height={200}
                        rotation={15}
                        top={50}
                        left={50}
                    />
                    <Rectangle
                        color="#F7DBA7"
                        width={200}
                        height={200}
                        rotation={-15}
                        top={50}
                        left={300}
                    />
                    <Rectangle
                        color="#FF564F"
                        width={200}
                        height={200}
                        rotation={30}
                        top={50}
                        left={550}
                    />
                </div>
            </section>

            {/* Example 2: Different Sizes */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">2. Different Sizes</h2>
                <div className="relative h-[400px] bg-monito-cream rounded-lg overflow-hidden">
                    <Rectangle
                        color="#003459"
                        width={150}
                        height={150}
                        rotation={20}
                        top={50}
                        left={50}
                    />
                    <Rectangle
                        color="#003459"
                        width={250}
                        height={250}
                        rotation={20}
                        top={50}
                        left={250}
                    />
                    <Rectangle
                        color="#003459"
                        width={350}
                        height={350}
                        rotation={20}
                        top={50}
                        left={550}
                    />
                </div>
            </section>

            {/* Example 3: Different Rotations */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">3. Different Rotations</h2>
                <div className="relative h-[300px] bg-monito-cream rounded-lg overflow-hidden">
                    <Rectangle
                        color="#F7DBA7"
                        width={200}
                        height={200}
                        rotation={0}
                        top={50}
                        left={50}
                    />
                    <Rectangle
                        color="#F7DBA7"
                        width={200}
                        height={200}
                        rotation={45}
                        top={50}
                        left={300}
                    />
                    <Rectangle
                        color="#F7DBA7"
                        width={200}
                        height={200}
                        rotation={90}
                        top={50}
                        left={550}
                    />
                </div>
            </section>

            {/* Example 4: Opacity and Blend Modes */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">4. Opacity & Blend Modes</h2>
                <div className="relative h-[300px] bg-monito-cream rounded-lg overflow-hidden">
                    <Rectangle
                        color="#003459"
                        width={250}
                        height={250}
                        rotation={15}
                        top={50}
                        left={100}
                        opacity={1}
                    />
                    <Rectangle
                        color="#FF564F"
                        width={250}
                        height={250}
                        rotation={-15}
                        top={50}
                        left={200}
                        opacity={0.7}
                        blendMode="multiply"
                    />
                    <Rectangle
                        color="#F7DBA7"
                        width={250}
                        height={250}
                        rotation={0}
                        top={50}
                        left={300}
                        opacity={0.5}
                    />
                </div>
            </section>

            {/* Example 5: Responsive - Mobile vs Desktop */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">5. Responsive Visibility</h2>
                <p className="text-monito-dark-gray mb-4">Resize your browser to see different rectangles on mobile vs desktop</p>
                <div className="relative h-[300px] bg-monito-cream rounded-lg overflow-hidden">
                    {/* Mobile Only */}
                    <Rectangle
                        color="#FF564F"
                        width={200}
                        height={200}
                        rotation={15}
                        top={50}
                        left={50}
                        hideOnDesktop={true}
                    />
                    <div className="lg:hidden absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md z-10">
                        <p className="text-sm font-semibold text-monito-blue">Mobile View (Red Rectangle)</p>
                    </div>

                    {/* Desktop Only */}
                    <Rectangle
                        color="#003459"
                        width={200}
                        height={200}
                        rotation={15}
                        top={50}
                        right={50}
                        hideOnMobile={true}
                    />
                    <div className="hidden lg:block absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md z-10">
                        <p className="text-sm font-semibold text-monito-blue">Desktop View (Blue Rectangle)</p>
                    </div>
                </div>
            </section>

            {/* Example 6: Complex Layering */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-monito-blue mb-4">6. Complex Layering (Like HeroBanner)</h2>
                <div className="relative h-[400px] bg-monito-cream rounded-lg overflow-hidden">
                    <Rectangle
                        color="#F7DBA7"
                        width={300}
                        height={300}
                        rotation={25}
                        top={-50}
                        left={-50}
                        zIndex={1}
                    />
                    <Rectangle
                        color="#003459"
                        width={350}
                        height={350}
                        rotation={14}
                        top={100}
                        right={-50}
                        zIndex={2}
                    />
                    <Rectangle
                        color="#F7DBA7"
                        width={300}
                        height={300}
                        rotation={28}
                        top={80}
                        right={0}
                        zIndex={3}
                        opacity={0.8}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-white px-8 py-6 rounded-lg shadow-xl">
                            <h3 className="text-2xl font-bold text-monito-blue">Content on Top</h3>
                            <p className="text-monito-dark-gray">Rectangles create beautiful backgrounds</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RectangleExamples;

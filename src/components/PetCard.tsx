import Image from 'next/image';

interface PetCardProps {
    id: string;
    name: string;
    gender: 'Male' | 'Female';
    age: string;
    price: string;
    image: string;
}

const PetCard = ({ id, name, gender, age, price, image }: PetCardProps) => {
    return (
        <div className="bg-white p-2 rounded-[12px] shadow-sm hover:shadow-lg transition-shadow duration-300 w-[185px] h-[317px] xl:w-[280px] xl:h-[378px]">
            <div className="relative aspect-square w-full rounded-[10px] overflow-hidden mb-4 pt-2 px-2">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-2 pb-2">
                <h3 className="text-base font-bold text-[#00171F] mb-1">{id} - {name}</h3>
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4 text-xs text-monito-dark-gray font-medium mb-1">
                    <span className="flex items-center gap-1">
                        Gene: <span className="text-monito-dark-gray font-bold">{gender}</span>
                    </span>
                    <span className="hidden sm:block w-1 h-1 bg-monito-dark-gray rounded-full"></span>
                    <span className="flex items-center gap-1">
                        Age: <span className="text-monito-dark-gray font-bold">{age}</span>
                    </span>
                </div>
                <div className="text-sm font-bold text-[#00171F]">
                    {price}
                </div>
            </div>
        </div>
    );
};

export default PetCard;

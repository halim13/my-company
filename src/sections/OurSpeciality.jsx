import React from "react";
import ACCESORIES from '../assets/components/accesories.png'
import SPEED from '../assets/components/speed.png'
import EXHAUST from '../assets/components/exhaust.png'

const OurSpeciality = () => {
    return (
        <div className='p-8' style={{ backgroundColor: '#509FDD' }} id='theperks'>
            <div className='bg-white'>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 pt-4">
                        <div className="mx-auto max-w-[510px] text-center lg:mb-10">
                            <h2 className="mb-4 text-3xl font-bold text-dark" style={{ color: '#029FE4' }}>
                                OUR SPECIALITY
                            </h2>
                            <p className="text-base text-body-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <BlogCard
                        CardTitle="Accesories"
                        CardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
                        image={ACCESORIES}
                    />
                    <BlogCard
                        CardTitle="Speed improvement"
                        CardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
                        image={SPEED}
                    />
                    <BlogCard
                        CardTitle="Exhaust"
                        CardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
                        image={EXHAUST}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurSpeciality;

const BlogCard = ({ image, CardTitle, CardDescription }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 text-center mb-4 ">
            <div className='flex w-full justify-center'>
                <img src={image} alt={CardTitle} className='mb-8' />
            </div>
            <h3 className="inline-block mb-4 text-sm font-semibold text-dark">
                {CardTitle}
            </h3>
            <p className="text-base" style={{ color: '#A7A7A7' }}>{CardDescription}</p>
        </div>
    );
};

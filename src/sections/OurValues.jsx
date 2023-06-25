import React from 'react'
import BG_OUR_VALUES from '../assets/components/Core-Values.png'

const item_values = [
    {
        title: 'Dedication',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    {
        title: 'Intellectual Honesty',
        description: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
    },
    {
        title: 'Curiosity',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
]

function OurValues() {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <h1 className="mb-12 text-3xl font-bold text-center" style={{ color: '#029FE4' }}>Our Core Values</h1>
                <div className="flex flex-wrap items-center">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                        <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src={BG_OUR_VALUES} className="w-full" />
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 px-8">
                        <p className='text-neutral-500 dark:text-neutral-300 mb-12'>
                            Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.

                            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                        </p>
                        {
                            item_values.map((item, i) => <div key={i} className="mb-12 flex">
                                <div className="shrink-0">
                                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" className="h-6 w-6 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 grow">
                                    <p className="mb-2 font-bold">{item.title}</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurValues

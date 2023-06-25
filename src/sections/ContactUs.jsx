import React from 'react'
import LOGO_WHITE from '../assets/logo/logo-white.png'
import BG_FOOTER from '../assets/backgrounds/bg-footer.png'
import Dropdown from '../components/Dropdown'
import { scrollTo } from '../utils'

const navigation = [
    { name: 'Who We Are', href: 'whoweare' },
    { name: 'Our Values', href: 'ourvalues' },
    { name: 'The Perks', href: 'theperks' },
    { name: 'Contact Us', href: 'contact' },
]

function ContactUs() {
    return (
        <div className="relative bg-[#07477A] isolate" id='contact'>
            <img
                src={BG_FOOTER}
                alt="background image"
                className="absolute w-full h-full pt-24 -z-10"
            />
            <div className='p-8 grid gap-x-6 md:grid-cols-2'>
                <div className='mb-2'>
                    <img src={LOGO_WHITE} alt="logo white" onClick={e => {
                        e.preventDefault()
                        scrollTo({ id: 'home' })
                    }} />
                    <div className='bg-white p-4 mt-4 max-w-sm'>
                        <Dropdown />
                        <p className='text-[#25A0D8]'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
                    </div>
                </div>
                <div className='lg:flex lg:justify-end lg:flex-wrap md:grid max-sm:grid'>
                    {
                        navigation.map((nav, i) => <a key={i} href={'#'} onClick={e => {
                            e.preventDefault()
                            scrollTo({ id: nav.href })
                        }} className='text-white lg:mr-4'>
                            {nav.name}
                        </a>)
                    }
                </div>
            </div >
        </div >
    )
}

export default ContactUs

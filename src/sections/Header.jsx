import BACKGROUND from '../assets/backgrounds/bg-header.png'
import BACKGROUND2 from '../assets/backgrounds/Background.png'

function Header() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen" id='home'>
            <img
                src={BACKGROUND}
                alt="background image"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center"
            />
            <div className='absolute bottom-0 w-full pb-8 pt-16'>
                <img
                    src={BACKGROUND2}
                    alt="background header"
                    className="absolute -z-10 w-full -bottom-1 h-full"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Discover Your Wonder</h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

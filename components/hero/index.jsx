const Hero = () => (
    <div className="w-auto mx-6 min-h-screen flex flex-col justify-center text-white lg:mx-[80px]">
        <div className="flex flex-col gap-6 h-[37.5rem] my-auto w-full align-middle lg:flex-row-reverse lg:align-middle lg:h-min lg:max-w-5xl lg:mx-auto lg:justify-between ">
            <div className="mx-auto w-64 h-60 lg:h-96 lg:w-96 relative lg:mx-0">
                <img
                    src="hero1.png"
                    className="absolute top-0 left-16 lg:h-60 lg:left-32"
                />
                <img
                    src="hero2.png"
                    className="absolute right-2 top-10 lg:h-60 lg:top-24 lg:right-0"
                />
                <img
                    src="hero3.png"
                    className="absolute bottom-0 left-5 lg:h-60"
                />
            </div>
            <div className="contents lg:flex lg:flex-col lg:gap-6 lg:width-[700px]">
                <img src="/hero-text.svg" className="h-8 lg:hidden" />
                <img
                    src="/hero-text-large.svg"
                    className="hidden h-24 lg:block self-start"
                />
                <p className="max-w-[24rem] text-center mx-auto text-xs lg:text-left lg:max-w-[28rem] lg:mx-0 opacity-50 lg:leading-6 leading-5">
                    A group of 10000 omnipresent frogs, living and thriving on
                    the different networks of the Blockchain. Waiting to be
                    possessed by one as crazy as them; someone crazy enough to
                    believe, like the princess who kissed the frog, that one
                    frog could be the gateway to a whole new world!
                </p>
                <img src="/hero-button.svg" className="h-16 lg:hidden" />
                <div className="w-auto mx-auto lg:mx-0 lg:w-auto ">
                    <p className="text-left w-full text-sm mb-2 lg:text-center opacity-50">
                        AVAILABLE AT
                    </p>
                    <div className="w-full flex justify-between gap-8 lg:gap-4">
                        <img
                            src="/hero-button-large.svg"
                            className="h-12 lg:block hidden"
                        />
                        <div className="rounded-full py-4 w-max text-center text-white text-md px-5 flex gap-4 lg:py-2 border-[1px] border-white">
                            <img src="/opensea.svg" className="text-black" />
                            <p className="w-max my-auto">Opensea</p>
                        </div>
                        <div className="rounded-full py-4 w-max text-center text-white text-md px-5 flex gap-4 lg:py-2 border-[1px] border-white">
                            <img src="/tofu.svg" className="text-black" />
                            <p className="w-max my-auto">Tofu.nft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Hero

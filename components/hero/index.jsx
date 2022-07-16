const Hero = () => (
    <div className="w-auto mx-6 h-auto flex flex-col justify-center text-white lg:mx-[80px] my-auto">
        <div className="flex flex-col gap-6 min-h-[37.5rem] mt-[75px] lg:mt-[100px] w-full align-middle lg:flex-row-reverse lg:align-middle lg:min-h-0 lg:h-auto lg:max-w-5xl lg:mx-auto lg:justify-between">
            <div className="mx-auto w-72 h-72 lg:h-96 lg:w-96 relative lg:mx-0">
                <img
                    src="hero1.png"
                    className="h-44 absolute top-5 left-10 lg:h-60 lg:left-18 lg:top-0"
                />
                <img
                    src="hero2.png"
                    className="h-44 absolute -left-2 bottom-0 lg:h-60 lg:bottom-4 lg:right-0"
                />
                <img
                    src="hero3.png"
                    className="h-44 absolute bottom-0 -right-2 lg:h-60 lg:bottom-4"
                />
            </div>
            <div className="contents lg:flex lg:flex-col lg:gap-6 lg:width-[700px]">
                <img src="/hero-text.svg" className="h-8 lg:hidden" />
                <img
                    src="/hero-text-large.svg"
                    className="hidden h-24 lg:block self-start"
                />
                <p className="max-w-[24rem] text-center mx-auto text-xs lg:text-left lg:max-w-[28rem] lg:mx-0 opacity-75 lg:leading-[34px] leading-5">
                    A group of 10000 omnipresent frogs, living and thriving on
                    the different networks of the Blockchain. Waiting to be
                    possessed by one as crazy as them; someone crazy enough to
                    believe, like the princess who kissed the frog, that one
                    frog could be the gateway to a whole new world!
                </p>
                <div className="w-auto mx-auto lg:mx-0 lg:w-auto ">
                   
                    <p className="text-left w-full text-sm mb-2 lg:text-center opacity-50">
                        AVAILABLE AT
                    </p>
                    <div className="w-full flex justify-start gap-4 lg:gap-4">
                        <img
                            src="/hero-button-large.svg"
                            className="h-12 lg:block hidden z-10"
                        />
                        <div className="rounded-full py-3 w-max text-center text-white text-md px-6 flex gap-4 lg:py-2 border-[1px] border-white">
                            <img src="/opensea.svg" className="text-black" />
                            <p className="w-max my-auto">Opensea</p>
                        </div>
                        <div className="rounded-full py-3 w-max text-center text-white text-md px-6 flex gap-4 lg:py-2 border-[1px] border-white">
                            <img src="/tofu.svg" className="text-black" />
                            <p className="w-max my-auto">tofu.NFT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Hero

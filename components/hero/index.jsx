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
                    $CRZY IS A MEMECOIN AND HAS NO UTILITY. DON'T RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.
                </p>
                <div className="w-auto mx-auto lg:mx-0 lg:w-auto ">
                   
                  
                    
                </div>
            </div>
        </div>
    </div>
)
export default Hero

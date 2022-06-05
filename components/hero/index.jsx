const Hero = () => (
    <div className="w-auto mx-6 min-h-screen flex flex-col justify-center text-white">
        <div className="flex flex-col gap-6 h-[37.5rem] my-auto w-full align-middle">
            <div className="mx-auto w-64 h-64 relative">
                <img src="hero1.png" className="absolute top-0 left-16" />
                <img src="hero2.png" className="absolute right-2 top-10" />
                <img src="hero3.png" className="absolute bottom-0 left-5" />
            </div>
            <h1 className="text-4xl text-bold text-center blackhan">
                We are the Crazy Frogs
            </h1>
            <p className="w-96 text-center mx-auto text-xs">
                A group of 10000 omnipresent frogs, living and thriving on the
                different networks of the Blockchain. Waiting to be possessed by
                one as crazy as them; someone crazy enough to believe, like the
                princess who kissed the frog, that one frog could be the gateway
                to a whole new world!
            </p>
            <div className="rounded-full py-4 w-96 text-center bg-white text-black text-2xl mx-auto">
                MINT NOW
            </div>
            <div className="w-96 mx-auto">
                <p className="text-left w-full text-sm mb-2">AVAILABLE AT</p>
                <div className="w-full flex justify-between">
                    <div className="rounded-full py-4 w-max text-center bg-green-500 text-black text-md px-6 flex gap-4">
                        <img src="/opensea.svg" />
                        <p className="w-max">MINT NOW</p>
                    </div>
                    <div className="rounded-full py-4 w-max text-center bg-green-500 text-black text-md px-6 flex gap-4">
                        <img src="/tofu.svg" />
                        <p className="w-max">MINT NOW</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Hero

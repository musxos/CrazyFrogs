import { useState } from "react"

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="lg:relative lg:w-full lg:mx-auto">
            <div
                className="z-20 rounded-full absolute top-4 right-4  h-12 w-12 shadow-md shadow-black lg:hidden"
                onClick={() => setVisible(!visible)}
            ></div>
            <img src="/logo.png" className="absolute w-36 lg:hidden left-4" />
            <div
                className="z-10 absolute right-0 h-full w-[300px] lg:w-full lg:h-20 bg-bg navContainer transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] lg:transition-none"
                data-visible={visible}
            >
                <div className="h-full w-full relative flex flex-row lg:max-w-[1184px] lg:mx-auto">
                    <div className="w-[80px] hidden lg:block invisible"></div>
                    <img src="/logo.png" className="w-56 hidden lg:block" />
                    <div className="flex flex-col gap-12 pt-28 pl-8 lg:flex-row lg:py-4 lg:my-auto lg:mx-auto lg:h-full">
                        <img
                            src="/home-nav.svg"
                            className="h-4 self-start lg:h-2 lg:my-auto"
                        />
                        <img
                            src="/license-nav.svg"
                            className="h-4 self-start lg:h-2 lg:my-auto"
                        />
                        <img
                            src="/roadmap-nav.svg"
                            className="h-4 self-start lg:h-2 lg:my-auto"
                        />
                        <img
                            src="/mint-nav.svg"
                            className="h-4 self-start lg:hidden"
                        />
                    </div>
                    <div className="absolute bottom-8 left-8 flex flex-row gap-4 lg:top-4 lg:right-4 lg:left-auto lg:relative">
                        <div className="rounded-full h-12 w-12 shadow-md shadow-black"></div>
                        <div className="rounded-full h-12 w-12 shadow-md shadow-black"></div>
                        <div className="rounded-full h-12 w-12 shadow-md shadow-black"></div>
                    </div>
                    <div className="w-[80px] hidden lg:block invisible"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

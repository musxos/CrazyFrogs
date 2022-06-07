import Rainbow from "../components/rainbow"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-full min-w-screen bg-bg overflow-x-hidden flex flex-col justify-center overflow-y-scroll">
                <Navbar />
                <Hero />
                <Rainbow className="h-72 absolute left-0 bottom-0 hidden lg:block" />
                {/* <Footer /> */}
            </div>
        </div>
    )
}

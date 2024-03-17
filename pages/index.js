import Rainbow from "../components/rainbow"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-screen min-w-screen bg-bg overflow-x-hidden flex flex-col justify-between overflow-y-scroll">
                <Navbar />
                <Hero />
                <Rainbow className="h-72 absolute left-0 bottom-0 hidden lg:block" />
                <Footer  className="w-full flex flex-row justify-center gap-4 py-4 mt-12 lg:mt-0 text-xs"/>
            </div>
        </div>
    )
}

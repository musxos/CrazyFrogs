import Footer from "../components/footer"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="bg-black h-screen w-auto">
            <div className="h-full min-w-screen bg-bg overflow-x-hidden flex flex-col justify-between">
                <Navbar />
                <Hero />
                {/* <Footer /> */}
            </div>
        </div>
    )
}

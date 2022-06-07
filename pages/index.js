import Footer from "../components/footer"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="bg-black h-screen w-screen">
            <div className="h-full w-full bg-bg">
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    )
}

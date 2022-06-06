import Footer from "../components/footer"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="bg-bg h-screen w-screen">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

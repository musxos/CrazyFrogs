import Footer from "../components/footer"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"
import RoadmapElement from "../components/roadmap"

export default function Roadmap() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-full min-w-screen bg-bg overflow-x-hidden flex flex-col justify-center overflow-y-scroll">
                <Navbar />
                <RoadmapElement />
                <Footer />
            </div>
        </div>
    )
}

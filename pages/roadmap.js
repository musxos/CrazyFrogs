import Footer from "../components/footer"
import Hero from "../components/hero/index"
import Navbar from "../components/navbar"
import Rainbow from "../components/rainbow"
import RoadmapElement from "../components/roadmap"

export default function Roadmap() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-full min-w-screen bg-bg overflow-x-hidden flex flex-col justify-center overflow-y-scroll">
                <Navbar />
                <RoadmapElement />
                <Footer  className="w-full flex flex-row justify-center gap-4 py-4 mt-12"/>
                <Rainbow className="h-72 absolute left-0 top-[50vh] hidden lg:block" />
            </div>
        </div>
    )
}

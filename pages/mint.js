import Rainbow from "../components/rainbow"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import MintComponent from "../components/mint"

export default function Mint() {
    return (
        <div className="bg-black min-h-screen w-auto">
            <div className="h-screen min-w-screen bg-bg overflow-x-hidden flex flex-col justify-between overflow-y-scroll">
                <Navbar />
                <MintComponent />
                <Rainbow className="h-72 absolute left-0 bottom-0 hidden lg:block" />
                <Footer  className="w-full flex flex-row justify-center gap-4 py-4"/>
            </div>
        </div>
    )
}

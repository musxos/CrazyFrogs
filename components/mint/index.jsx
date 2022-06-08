import { useEffect, useState } from "react"

const RenderText = ({ isConnected }) => {
    return isConnected ? (
        <p className="text-green-500 text-center">{"Wallet connected."}</p>
    ) : (
        <p className="text-red-500 text-center">{"Wallet not connected."}</p>
    )
}

const MintComponent = () => {
    const [isConnected, setIsConnected] = useState(true)
    useEffect(() => {
        // wallet connection strategy
    }, [])
    return (
        <div className="w-full h-full grid place-items-center">
            <div className="flex flex-col gap-8">
                <img src="/mint-time.svg" className="h-12" />
                <img src="/connect.svg" className="h-[60px]" />
                <RenderText isConnected={isConnected} />
            </div>
        </div>
    )
}
export default MintComponent

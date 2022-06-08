const RoadmapElement = () => (
    <div className="mx-auto lg:w-[800px] w-[350px] flex flex-col  text-white">
        <div className="w-[380px] lg:w-[750px] h-[200px] mt-[100px] mx-auto relative">
            <img
                src="/frog1.png"
                className="h-[150px] lg:h-[225px] absolute left-0 -top-2"
            />
            <img
                src="/frog2.png"
                className="h-[150px] lg:h-[225px] absolute left-[60px] lg:left-[150px] top-2"
            />
            <img
                src="/frog3.png"
                className="h-[150px] lg:h-[225px] absolute right-[60px] lg:right-[150px] top-2"
            />
            <img
                src="/frog4.png"
                className="h-[150px] lg:h-[225px] absolute right-0 -top-2"
            />
        </div>
        <img
            src="/Roadmap.svg"
            className="h-[40px] lg:h-[80px] self-center lg:mt-8"
        />
        <p className="text-center my-4 opacity-75">
            This roadmap signifies our goals and ambitions for crazy frogs
        </p>
        <div className="flex flex-col gap-4 p-8 border-l-4 border-[#2AF6FF]">
            <h1 className="timeline-title"> PHASE 1</h1>
            <img src="/development.svg" className="h-6 self-start" />
            <p className="text-xs leading-[16px] opacity-75">
                Developing and launching the smart contract code to build
                LayerZero PFP NFTs on testnet. <br />
                Deploying the fully-tested smart contract on mainnet for a
                free-to-mint NFT collection of 10000 Crazy Frogs, with tech
                support from our parent company, LVME studios.
            </p>
        </div>
        <div className="flex flex-col gap-4 p-8 border-l-4 border-[#2AF6FF]">
            <h1 className="timeline-title"> PHASE 2</h1>
            <img src="/utilities.svg" className="h-6 self-start" />
            <p className="text-xs leading-[16px] opacity-75">
                {"We're"} developing long-term utilities for Crazy Frogs NFT
                holders by: Processing the cc0 legal agreement for the Crazy
                Frogs NFT collection, and allowing holders to commercialize
                their NFTs at will. Periodically granting free airdrop and mints
                to 100 rare Crazy Frogs holders (using premint.xyz for
                selection) from upcoming LVME studios NFT projects.
                <br />
                <br /> Building a Discord community and award WLs to the first
                1000 members.
            </p>
        </div>
        <div className="flex flex-col gap-4 p-8 border-l-4 border-[#2AF6FF]">
            <h1 className="timeline-title"> PHASE 3</h1>
            <img src="/future-perks.svg" className="h-6 self-start" />
            <p className="text-xs leading-[16px] opacity-75">
                P2E games and ultrahigh realistic NFTs - Grant holders of the
                rare NFTs access to Upcoming Play-to-Earn NFTs also developed by
                LVME studios including ultrahigh realistic NFT projects, built
                for the Metaverse. With some of these projects being free to
                mint, eligibility will be determined by how many cc0 NFTs a user
                holds. <br />
                All-access card
                <br /> Development of an all-access card for holders begins in
                Q3. With only 1000 to ever exist, the all-access card will grant
                users:
                <br />
                <ul className="list-disc mx-3 mt-4">
                    <li>
                        Auto-whitelisting for all future LVME studios projects
                        and;
                    </li>
                    <li>Priority merchandise in our secondary markets. </li>
                </ul>
                <br />
            </p>
        </div>
        <div className="flex flex-col gap-4 p-8 border-l-4 border-[#2AF6FF]">
            <h1 className="timeline-title"> PHASE 4</h1>
            <img src="/surprise.svg" className="h-6 self-start" />
            <p className="text-xs leading-[16px] opacity-75">
                Other web 3 compatible NFT products are scheduled to deploy in
                Q2 2023, e.g a carbon neutral cryptocurrency. All these perks
                will made available to specifically to those who pre-owned any
                LVME studios NFT, including Crazy frogs.
            </p>
        </div>
    </div>
)
export default RoadmapElement

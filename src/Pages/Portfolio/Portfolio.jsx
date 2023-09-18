import Banner from "../Shared/Banner/Banner"
import PortfolioCard from "./PortfolioCard/PortfolioCard"
import { PortfoliDAta } from "./PortfolioData/PortFolioData"
import './Portfolio.css'


const Portfolio = () => {
    return (
        <section className=" overflowhidden">
            {/* banner section */}
            <Banner />
            {/* card section */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-x-6 space-y-12 container mx-auto my-[150px] ">
                {
                    PortfoliDAta?.map((CardData, index) => <PortfolioCard key={index} CardData={CardData} />)
                }
            </div>
        </section>
    )
}

export default Portfolio
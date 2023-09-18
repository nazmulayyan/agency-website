import Banner from "../Shared/Banner/Banner"
import PortfolioCard from "./PortfolioCard/PortfolioCard"
import { PortfoliDAta } from "./PortfolioData/PortFolioData"
import './Portfolio.css'


const Portfolio = () => {
    return (
        <section className=" overflow-auto">
            {/* banner section */}
            <Banner />
            {/* card section */}
            <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto py-[150px]">
                {
                    PortfoliDAta?.map((CardData, index) => <PortfolioCard key={index} CardData={CardData} />)
                }
            </div>
        </section>
    )
}

export default Portfolio
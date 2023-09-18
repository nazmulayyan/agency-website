import Banner from "../Shared/Banner/Banner"
import PortfolioCard from "./PortfolioCard/PortfolioCard"
import { PortfoliDAta } from "./PortfolioData/PortFolioData"
import './Portfolio.css'


const Portfolio = () => {
    return (
        <section className=" overflow-auto">
            {/* banner section */}
            <Banner title={"Portfolio standard"} />
            {/* card section */}
<<<<<<< HEAD
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-12 space-x-6 container mx-auto my-[150px] ">
=======
            <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto py-[150px]">
>>>>>>> 03850770e535f48884d0ff2fc750e7cb34558177
                {
                    PortfoliDAta?.map((CardData, index) => <PortfolioCard key={index} CardData={CardData} />)
                }
            </div>
        </section>
    )
}

export default Portfolio
<<<<<<< HEAD
import Banner from "../Shared/Banner/Banner";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { PortfoliDAta } from "./PortfolioData/PortFolioData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className=" overflow-auto">
      {/* banner section */}
      <Banner title={"Portfolio standard"} />
      {/* card section */}
      <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto py-[150px]">
        {PortfoliDAta?.map((CardData, index) => (
          <PortfolioCard key={index} CardData={CardData} />
        ))}
      </div>
    </section>
  );
};
=======
import Banner from "../Shared/Banner/Banner"
import PortfolioCard from "./PortfolioCard/PortfolioCard"
import { PortfoliDAta } from "./PortfolioData/PortFolioData"
import './Portfolio.css'
import { Link } from "react-router-dom"


const Portfolio = () => {
    return (
        <section className=" overflow-auto">
            {/* banner section */}
            <Banner title={"Portfolio standard"} />
            {/* card section */}
            <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto py-[150px]">
                {
                    PortfoliDAta?.map((CardData, index) => <Link to='/details' key={index}> <PortfolioCard CardData={CardData} /></Link>)
                }
            </div>
        </section>
    )
}
>>>>>>> 2745f594585006e9d2f5cb6fbe39988f96926478

export default Portfolio;

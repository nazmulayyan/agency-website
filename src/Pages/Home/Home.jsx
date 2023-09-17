import Title from "../../Components/Title/Title";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
            <Title subheading='what we do' heading='Services That Help You Grow.'></Title>
            </div>
        </div>
    );
};

export default Home;
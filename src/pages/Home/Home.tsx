import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SupplyCardList from "./SupplyCardList";

const Home = () => {
    return (
        <div>
            <Banner />
            <SupplyCardList />
            <Gallery />
            <AboutUs />
        </div>
    );
};

export default Home;
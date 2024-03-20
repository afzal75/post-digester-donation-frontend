import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SupplyCardList from "./DonationCardList";
import OurMission from "./OurMisson";

const Home = () => {
    return (
        <>
            <Banner />
            <SupplyCardList />
            <Gallery />
            <AboutUs />
            <OurMission />
        </>
    );
};

export default Home;
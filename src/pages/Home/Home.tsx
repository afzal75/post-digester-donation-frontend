import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SupplyCardList from "./DonationCardList";
import OurMission from "./OurMisson";
import ContactUs from "../contact/ContactUs";

const Home = () => {
    return (
        <>
            <Banner />
            <SupplyCardList />
            <Gallery />
            <AboutUs />
            <OurMission />
            <ContactUs />
        </>
    );
};

export default Home;
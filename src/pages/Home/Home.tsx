import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SupplyCardList from "./DonationCardList";
import ContactUs from "../contact/ContactUs";
import OurMission from "./OurMission";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>
            <Banner />
            <SupplyCardList />
            <Gallery />
            <AboutUs />
            <Testimonial />
            <OurMission />
            <ContactUs />
        </>
    );
};

export default Home;
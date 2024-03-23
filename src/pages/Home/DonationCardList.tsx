import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TDonation } from "@/types/types";
import { useGetDonationsQuery } from "@/redux/features/donation/donation";
import DonationCard from "@/components/ui/DonationCard";
const DonationCardList = () => {
    const { data } = useGetDonationsQuery(undefined);
    return (
        <motion.div
            initial="hidden"
            className="container my-20"
        >
            <SectionTitle
                name="Donations"
                title="Featured Donations"
                subTitle="Explore essential health and medical resources for post-disaster relief efforts."
            />
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {data?.result?.slice(0, 6)?.map((donationPost: TDonation) => (
                    <DonationCard {...donationPost} key={donationPost._id} />
                ))}
            </div>

            <div className="flex text-green-500 items-end justify-center">
                <div>
                    <Link to="/donations">
                        <Button variant="link" className="gap-2 text-red-400 border text-xl mt-8 mr-4">
                            View All {""}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default DonationCardList;

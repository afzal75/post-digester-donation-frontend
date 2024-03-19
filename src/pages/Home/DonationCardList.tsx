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
                name="Supplies"
                title="Featured Donations"
                subTitle="Explore essential health and medical resources for post-disaster relief efforts."
            />
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {data?.result?.slice(0, 6)?.map((donationPost: TDonation) => (
                    <DonationCard {...donationPost} key={donationPost._id} />
                ))}
            </div>

            <div className="flex items-end justify-center">
                <div>
                    <Link to="/donations">
                        <Button variant="link" className="gap-2 border text-xl mt-8 mr-4">
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




// import { Link } from "react-router-dom";

// import { motion } from "framer-motion";
// import useScrollGrow from "@/hooks/ScrollGrowHook";
// import { TDonation } from "@/types/types";
// import { Button } from "@/components/ui/button";

// const DonationCardList = ({ donation }: { donation: TDonation }) => {
//     const { style, componentRef } = useScrollGrow();
//     const { _id, amount, category, image, title } = donation;
//     return (
//         <motion.div
//             className="w-[250px] sm:min-w-80 lg:min-w-full bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
//             style={style}
//             ref={componentRef}
//         >
//             <img
//                 className="w-full hover:scale-105 duration-500 h-60"
//                 src={image}
//                 alt=""
//             />
//             <div className="p-5 flex justify-between flex-col h-52">
//                 <div>
//                     <h3 className="text-lg text-primary dark:text-white font-bold">
//                         {title}
//                     </h3>
//                     <h4 className="text-slate-700 dark:text-slate-300">{category}</h4>
//                     <p className="italic text-secondary font-semibold">
//                         <span className=" text-primary dark:text-secondary">$</span>
//                         {amount}
//                     </p>
//                 </div>
//                 <div className="mt-5 text-center w-full">
//                     <Link to={`/donations/${_id}`}>
//                         {" "}
//                         <Button className="w-full bg-primary dark:bg-secondary duration-500">
//                             View Detail
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default DonationCardList;

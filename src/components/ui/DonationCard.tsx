import { Link } from "react-router-dom";
import { Button } from "./button";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollGrowHook";
import { TDonation } from "@/types/types";

const DonationCard = ({ _id, amount, category, image, title }: TDonation) => {
    const { style, componentRef } = useScrollGrow();
    return (
        <motion.div
            className="w-[250px] sm:min-w-80 lg:min-w-full bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
            style={style}
            ref={componentRef}
        >
            <img
                className="w-full hover:scale-105 duration-500 h-60"
                src={image}
                alt=""
            />
            <div className="p-5 flex justify-between flex-col h-52">
                <div>
                    <h3 className="text-lg text-primary dark:text-white font-bold">
                        {title}
                    </h3>
                    <div className="mt-2.5 mb-5 flex items-center">
                        <span className="mr-2 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                            {category}
                        </span>
                    </div>
                    <p className="italic font-semibold text-orange-500">
                        <span className="text-primary">$</span>
                        {amount}
                    </p>
                </div>
                <div className="mt-5 text-center w-full">
                    <Link to={`/donations/${_id}`}>
                        {" "}
                        <Button className="w-full bg-primary dark:bg-secondary duration-500">
                            View Detail
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default DonationCard;


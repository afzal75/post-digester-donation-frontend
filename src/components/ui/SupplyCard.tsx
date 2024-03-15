
import { Link } from "react-router-dom";
import { Button } from "./button";
import { motion } from "framer-motion";
import { TSupply } from "@/types/types";

const SupplyCard = ({ image, amount, category, title, _id }: TSupply) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                },
            }}
            animate={{ rotate: 360 }}
            className="relative w-full  md:max-w-xs my-2 mx-auto overflow-hidden rounded-lg bg-white shadow"
        >
            <div>
                <img
                    className="h-[150px] rounded-md hover:rounded-br-none  transition-all duration-500 object-cover  w-full"
                    src={image}
                    alt="supply card"
                />
            </div>

            <div className="mt-4 px-5 pb-5">
                <div>
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        {title}
                    </h5>
                </div>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {category}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">
                            ${amount}{" "}
                        </span>
                        <span className="text-sm text-slate-900">per pack</span>
                    </p>
                    <Link to={`/supplies/${_id}`}>
                        <Button className="absolute bottom-0 right-0 rounded-tr-none rounded-bl-none rounded-tl-[20px]">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default SupplyCard;

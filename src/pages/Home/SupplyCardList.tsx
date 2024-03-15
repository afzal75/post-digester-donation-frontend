import SectionTitle from "@/components/ui/SectionTitle";
import SupplyCard from "@/components/ui/SupplyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import useAnimateComponent from "@/hooks/useAnimateComponent";
import { TSupply } from "@/types/types";
import { useGetSuppliesQuery } from "@/redux/features/supply/supply";
const SupplyCardList = () => {
    const { data } = useGetSuppliesQuery(undefined);
    // const { ref, variants, control } = useAnimateComponent();
    return (
        <motion.div
            // ref={ref}
            // variants={variants}
            // animate={control}
            initial="hidden"
            className="container my-20"
        >
            <SectionTitle
                name="Supplies"
                title="Featured Supplies"
                subTitle="Explore essential health and medical resources for post-disaster relief efforts."
            />

            <div className="flex items-end justify-end">
                <div>
                    <Link to="/supplies">
                        <Button variant="link" className="gap-2 text-xl mr-4">
                            See All{" "}
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
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {data?.result?.slice(0, 6)?.map((supplyPost: TSupply) => (
                    <SupplyCard {...supplyPost} key={supplyPost._id} />
                ))}
            </div>
        </motion.div>
    );
};

export default SupplyCardList;

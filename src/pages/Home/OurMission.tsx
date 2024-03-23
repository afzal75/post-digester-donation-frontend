import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GiPeaceDove } from "react-icons/gi";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const intro = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.25,
            delayChildren: 0.5,
        },
    },
};

const introChildren = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: "spring", bounce: 0.5 },
    },
};

const icons = {
    initial: { y: 0 },
    animate: {
        y: 10,
        scale: 1,
        transition: {
            duration: 1,
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    },
};

const OurMission = () => {
    const view = useRef<HTMLDivElement>(null);
    const inView = useInView(view);
    return (
        <div className="py-20">
            <SectionTitle
                name="JOIN OUR MISSION"
                title="How Can You Help"
            />
            <motion.div
                className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-5 text-center"
                ref={view}
                variants={intro}
                initial="hidden"
                animate={inView ? "visible" : ""}
            >
                <motion.div
                    className="flex justify-center items-center gap-2 flex-col"
                    variants={introChildren}
                >
                    <motion.div variants={icons} initial="initial" animate="animate">
                        <FaHandHoldingHeart className="size-24 bg-primary  p-5 rounded-full border-2 border-secondary text-secondary mb-3"></FaHandHoldingHeart>
                    </motion.div>
                    <h2 className="dark:text-white text-2xl font-bold">
                        DONATION
                    </h2>
                    <p className="dark:text-white">
                        Your generosity fuels change and transforms lives.
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center gap-2 flex-col"
                    variants={introChildren}
                >
                    <motion.div variants={icons} initial="initial" animate="animate">
                        <BsFillBuildingsFill className="size-24 bg-primary  p-5 rounded-full border-2 border-secondary text-secondary mb-3"></BsFillBuildingsFill>
                    </motion.div>
                    <h2 className="dark:text-white text-2xl font-bold">
                        REBUILD
                    </h2>
                    <p className="dark:text-white">
                        Together, we're rebuilding communities and restoring hope.
                    </p>
                </motion.div>

                <motion.div variants={introChildren}>
                    <div className="flex justify-center items-center gap-2 flex-col">
                        <motion.div variants={icons} initial="initial" animate="animate">
                            <GiPeaceDove className="size-24 bg-primary  p-5 rounded-full border-2 border-secondary text-secondary mb-3"></GiPeaceDove>
                        </motion.div>
                        <h2 className="dark:text-white text-2xl font-bold">
                            PEACE
                        </h2>
                        <p className="dark:text-white">
                            Join us in fostering harmony and building a world of unity.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default OurMission;

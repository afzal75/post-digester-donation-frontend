import AnimatedButton from "@/components/ui/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner = () => {
    const imageControl = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,

                type: "spring",
                stiffness: 400,
            },
        },
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: 1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 300 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="container"
        >
            {/* <div>
        <img
          className="w-[1200px] h-full -z-30 absolute -top-1/2 -left-1/2"
          src="Oval.svg"
          alt=""
        />
      </div> */}
            <section className="my-5">
                <div className="max-w-screen-xl mx-auto  gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <motion.h1
                            variants={item}
                            className="text-sm text-primary font-medium"
                        >
                            Empowering Communities, Saving Lives:
                        </motion.h1>
                        <motion.h2
                            variants={item}
                            className="text-3xl  font-extrabold md:text-5xl"
                        >
                            Join Us in Ensuring Vital Health Supplies.
                        </motion.h2>
                        <motion.p variants={item}>
                            Together, we make a difference in times of crisis. Explore,
                            donate, and support our mission to provide critical healthcare
                            supplies where they're needed most
                        </motion.p>
                        <motion.div
                            variants={item}
                            className="items-center gap-x-3  gap-5 sm:flex sm:space-y-0"
                        >
                            <Link to="/dashboard">
                                <AnimatedButton>
                                    <Button>Let's get started</Button>
                                </AnimatedButton>
                            </Link>

                            <Link to="/supplies">
                                <AnimatedButton>
                                    <Button
                                        variant={"outline"}
                                        className="flex items-center my-3 md:my-0 justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                                    >
                                        Give Support
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
                                </AnimatedButton>
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={imageControl}
                        initial="hidden"
                        animate="visible"
                        className="flex-none mt-14 md:mt-0 md:max-w-xl"
                    >
                        <img
                            src="https://img.freepik.com/free-photo/close-up-people-holding-apples-bag_23-2149182018.jpg?t=st=1710443197~exp=1710446797~hmac=3d60237810ab5c2fe088ce7e6f056a3c1d5431a19887c7946dd711780516c610&w=740"
                            className=" md:rounded-tl-[108px] md:h-[350px]"
                            alt=""
                        />
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Banner;

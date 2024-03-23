import Loading from "@/components/ui/Loading";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { TVolunteer } from "@/types/types";

const OurVolunteers = () => {
    const { data, isFetching } = useGetVolunteerQuery(undefined);
    if (isFetching) {
        return <Loading />;
    }

    return (
        <div>
            <section className="">
                <div className="mx-auto">
                    <div className=" h-60 bg-primary dark:bg-black flex justify-center items-center">
                        <div className="text-center space-y-2 text-white ">
                            <h1 className="text-5xl font-semibold">Our Volunteers</h1>
                            <p className="  text-gray-200">
                                Have a look to the volunteer of our organization
                            </p>
                        </div>
                    </div>

                    <Marquee className="my-5" speed={50}>
                        {data?.result?.map((item: TVolunteer) => (
                            <div className="block group w-64 border-2 m-1 p-5">
                                <motion.div
                                    whileHover={{
                                        scale: 1.2,

                                        transition: { duration: 0.3 },
                                    }}
                                    className="relative mb-6"
                                >
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                    />
                                </motion.div>
                                <h4 className="text-xl font-semibold dark:text-white mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                                    {item.firstName} {item.lastName}
                                </h4>
                                <span className="dark:text-white text-center block transition-all duration-500 group-hover:text-gray-900">
                                    {item.city}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </div>
    );
};

export default OurVolunteers;

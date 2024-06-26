
import { useParams } from "react-router-dom";
import { Button } from "./button";
import { toast } from "sonner";
import { TDonation } from "@/types/types";
import { useGetSingleDonationQuery } from "@/redux/features/donation/donation";

const DonationDetail = () => {
    const { id } = useParams();
    const { data } = useGetSingleDonationQuery(id);
    const donation: TDonation = data?.result;
    return (
        <div className="container py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src={donation?.image}
                                alt="Product Image"
                            />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {donation?.title}
                        </h2>

                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Donation Coast Amount:
                                </span>
                                <span className="text-gray-600 ms-3 dark:text-gray-300">
                                    ${donation?.amount}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Category:{" "}
                                <span className="bg-yellow-300">{donation?.category}</span>
                            </span>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Donation Description:
                            </span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                Nutritious food rations with a long shelf life, suitable for
                                emergency situations and disaster relief efforts.
                            </p>
                        </div>
                        <div className="flex -mx-2 my-10 mb-4">
                            <div className="w-1/2 px-2">
                                <Button
                                    onClick={() => toast.success("Thank you for your help")}
                                    className="w-full"
                                >
                                    Donate Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetail;

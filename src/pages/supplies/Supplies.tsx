import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import { useGetSuppliesQuery } from "@/redux/features/donation/donation";
import { TSupply } from "@/types/types";
import { Link } from "react-router-dom";

const Supplies = () => {
    const { data, isFetching } = useGetSuppliesQuery(undefined);

    if (isFetching) {
        return <Loading />;
    }

    return (
        <div className="container my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data?.result?.map((item: TSupply) => (
                    <div
                        key={item._id}
                        className=" grid grid-cols-3 items-center w-full rounded-xl  mx-auto  shadow-2xl"
                    >
                        <div className="col-span-1">
                            <img
                                loading="lazy"
                                src={item.image}
                                className="w-full h-full rounded-md"
                            />
                        </div>
                        <div className="col-span-2 px-4 py-6">
                            <h3 className="text-xl truncate font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="mt-2 truncate text-sm text-gray-400">
                                {item.description}
                            </p>

                            <div className="mt-2.5 mb-5 flex justify-between items-center">
                                <div className="mr-2 rounded text-black bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                    {item.category}
                                </div>
                                <div className="mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold">
                                    <p>
                                        <span className="text-2xl font-bold text-slate-900">
                                            ${item.amount}
                                        </span>
                                        <span className="text-sm text-slate-900">per pack</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Link to={`/supplies/${item._id}`}>
                                    <Button
                                        variant={"outline"}
                                        className="flex group items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                                    >
                                        More Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5 group-hover:-me-2 transition-all"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Supplies;

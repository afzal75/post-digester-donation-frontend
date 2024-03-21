import { Heart, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { TComment } from "@/types/types";
import { formatTimeAgo } from "@/lib/formateTimeAgo";

const CommentCard = ({
    commenterName,
    timestamp,
    comments,
    image,
}: TComment) => {
    const [like, setLike] = useState(false);
    return (
        <div className="mx-auto my-3 ">
            <div className="rounded-md border p-4 ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={
                                image
                                    ? image
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            }
                            alt="Avatar"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{commenterName}</h2>

                            <p className="text-sm text-gray-500">
                                {formatTimeAgo(new Date(timestamp))}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{timestamp}</p>
                    </div>
                </div>
                <p className="my-5" dangerouslySetInnerHTML={{ __html: comments }} />
                <div className=" flex items-center space-x-2">
                    <motion.button
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setLike(!like)}
                        className="group text-gray-500 hover:text-gray-800"
                    >
                        <Heart className={`size-5 ${like ? "text-red-500" : ""}`} />
                        <span>Like</span>
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 1.2 }}
                        onClick={() => toast.success("Comments saved successfully")}
                        className="group text-gray-500 hover:text-gray-800"
                    >
                        <Save className="size-5" />
                        <span>Save</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;

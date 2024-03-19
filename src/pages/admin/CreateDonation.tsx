/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplyForm from "@/components/forms/DonateForm";
import getImageURL from "@/lib/getImageURL";
import { useCreateDonationMutation } from "@/redux/features/donation/donation";
import { TDonation } from "@/types/types";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const CreateDonation = () => {
    const [createSupply] = useCreateDonationMutation();
    const [image, setImage] = useState(null);
    const onFinish = async (values: TDonation) => {
        if (image) {
            values.image = image;
            const res = await createSupply(values).unwrap();
            if (res.result.insertedId) {
                toast.success("Your donation post added successfully");
            } else {
                toast.error("Something went wrong while add donation");
            }
            console.log(res);
        }
    };

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const imageURL = await getImageURL(file as File);
        console.log(imageURL);
        setImage(imageURL);
    };
    return (
        <div className="w-full max-w-lg mx-auto">
            <SupplyForm
                required={true}
                onFinish={onFinish}
                handleImage={handleImage}
            />
        </div>
    );
};

export default CreateDonation;

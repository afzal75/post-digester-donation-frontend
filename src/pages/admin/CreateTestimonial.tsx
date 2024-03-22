/* eslint-disable @typescript-eslint/no-explicit-any */
import TestimonialForm from "@/components/forms/TestimonialForm";
import getImageURL from "@/lib/getImageURL";
import { useCreateTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const CreateTestimonial = () => {
    const [createTestimonial] = useCreateTestimonialMutation();
    const [image, setImage] = useState(null);
    const onFinish = async (values: any) => {
        if (image) {
            values.image = image;
            const res = await createTestimonial(values).unwrap();
            console.log(res);
            if (res.result.insertedId) {
                toast.success("Your testimonial added successfully");
            } else {
                toast.error("Something went wrong while add");
            }
        }
    };

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const imageURL = await getImageURL(file as File);
        console.log(imageURL);
        setImage(imageURL);
    };
    return (
        <div>
            <TestimonialForm handleImage={handleImage} onFinish={onFinish} />
        </div>
    );
};

export default CreateTestimonial;

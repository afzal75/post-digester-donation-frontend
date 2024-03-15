import { EyeIcon, MailIcon, User } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";


const RegisterForm = () => {
    const [registerUser, { isError, isSuccess, isLoading }] =
        useRegisterUserMutation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FieldValues) => {
        registerUser(data);
    };
    if (isError) {
        toast.error("User registration failed");
    }
    if (isSuccess) toast.success("User registration successful");
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Sign Up</h3>
                <p className="text-sm mt-4">Hey ! Please create your account</p>
            </div>
            <div>
                <div className="relative flex items-center">
                    <input
                        {...register("name")}
                        name="name"
                        type="name"
                        required
                        className="w-full text-sm border-b px-4 py-3 focus-visible:outline-none"
                        placeholder="Enter your username"
                    />
                    <User className="w-[18px] text-primary h-[18px] absolute right-4" />
                </div>
            </div>
            <div>
                <div className="relative flex items-center">
                    <input
                        {...register("email")}
                        name="email"
                        type="email"
                        required
                        className="w-full text-sm border-b px-4 py-3 focus-visible:outline-none"
                        placeholder="Enter your email address"
                    />
                    <MailIcon className="w-[18px] text-primary h-[18px] absolute right-4" />
                </div>
            </div>
            <div>
                <div className="relative flex items-center">
                    <input
                        {...register("password")}
                        name="password"
                        type="password"
                        required
                        className="w-full text-sm border-b px-4 py-3 focus-visible:outline-none"
                        placeholder="Enter password"
                    />
                    <EyeIcon className="w-[18px] h-[18px] text-primary absolute right-4" />
                </div>
            </div>

            <div className="!mt-10">
                <Button type="submit" className="w-full">
                    {isLoading ? "Registering..." : "Register"}
                </Button>
            </div>
        </form>
    );
};

export default RegisterForm;

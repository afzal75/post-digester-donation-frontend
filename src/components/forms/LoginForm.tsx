import { EyeIcon, MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyJWT } from "@/lib/verifyJWT";
import { setUser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "afzalbhuiyan16@gmail.com",
            password: "123456",
        },
    });
    const onSubmit = async (data: FieldValues) => {
        try {
            const res = await loginUser(data).unwrap();
            const user = verifyJWT(res?.token);
            dispatch(
                setUser({
                    user: user,
                    token: res.token,
                })
            );

            toast.success("User Login successful", { duration: 1000 });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Email and password is not valid");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4">Welcome ! Please Login with your account</p>
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
                    Login
                    {/* {isLoading ? "Logging" : "Login"} */}
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;

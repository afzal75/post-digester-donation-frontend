import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegistrationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Login = () => {
    return (
        <div className="container my-10">
            <Tabs
                defaultValue="account"
                className="w-full text-center max-w-md mx-auto"
            >
                <TabsList className="w-full">
                    <TabsTrigger
                        className="font-semibold text-primary w-full"
                        value="account"
                    >
                        Login
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-semibold text-primary w-full"
                        value="password"
                    >
                        Register
                    </TabsTrigger>
                </TabsList>
                <TabsContent className="border p-4" value="account">
                    <LoginForm />
                </TabsContent>
                <TabsContent className="border p-4" value="password">
                    <RegisterForm />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Login;

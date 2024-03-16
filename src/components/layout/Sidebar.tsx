import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "../ui/drawer";

import { logoutUser } from "@/redux/features/auth/authSlice";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";
import { LayoutDashboard, LogOut, User } from "lucide-react";
const { confirm } = Modal;
const Sidebar = () => {
    const dispatch = useAppDispatch();
    const showDeleteConfirm = () => {
        confirm({
            title: "Are you sure logout this?",
            icon: <ExclamationCircleFilled />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                dispatch(logoutUser());
                toast.success("Logout successful", { duration: 1000 });
            },
        });
    };
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <span className="relative inline-block">
                    <img
                        src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1710614207~exp=1710617807~hmac=067c432665cf8b874d0bab687638efdcb2b8ac084eea254b6de648066ce64601&w=740"
                        className="object-cover size-9 hover:cursor-pointer rounded-full "
                    />
                    <span className="absolute animate-pulse top-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></span>
                </span>
            </DrawerTrigger>
            <DrawerContent className="h-screen overflow-y-scroll overflow-x-hidden focus-visible:outline-none right-0 left-auto mt-0 w-[300px] rounded-none">
                <div className="mx-auto w-full p-5">
                    <DrawerHeader>
                        <Link to="/" className="flex items-center  text-2xl font-black">
                            <span className="flex gap-1 justify-center items-center bold">
                                <img src="logo.svg" alt="" />
                                MedReliefHub
                            </span>
                        </Link>
                    </DrawerHeader>

                    <ul>
                        <li>
                            <Link
                                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                                to="/dashboard"
                            >
                                <LayoutDashboard className="size-5" />
                                <span className="mx-4 font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                to="/profile"
                            >
                                <User className="size-5" />
                                <span className="mx-4 font-medium">Profile</span>
                            </Link>
                        </li>
                        <li
                            onClick={showDeleteConfirm}
                            className="flex cursor-pointer items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        >
                            <LogOut className="size-5" />
                            <span className="mx-4 font-medium">Logout</span>
                        </li>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Sidebar;

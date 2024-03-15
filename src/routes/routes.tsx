import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Supplies from "@/pages/supplies/Supplies";
import SupplyDetail from "@/components/ui/SupplyDetail";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/supplies",
                element: <Supplies />,
            },
            {
                path: "/supplies/:id",
                element: <SupplyDetail />,
            },
            {
                path: "/login",
                element: <Login />,
            },

        ],
    },
]);

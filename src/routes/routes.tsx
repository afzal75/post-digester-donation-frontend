import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Supplies from "@/pages/supplies/Supplies";


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
                path: "/login",
                element: <Login />,
            },

        ],
    },
]);

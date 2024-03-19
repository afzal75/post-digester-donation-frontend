import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Supplies from "@/pages/supplies/Donations";
import SupplyDetail from "@/components/ui/DonationDetail";
import AdminLayout from "@/components/layout/AdminLayout";
import AllSupplies from "@/pages/admin/AllDonations";
import CreateSupply from "@/pages/admin/CreateDonation";
import Dashboard from "@/pages/admin/Dashboard";


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
    {
        path: "dashboard",
        element:
            <AdminLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            }
            ,
            {
                path: "/dashboard/supplies",
                element: <AllSupplies />,
            },
            {
                path: "/dashboard/create-supply",
                element: <CreateSupply />,
            },
        ]
    },
]);

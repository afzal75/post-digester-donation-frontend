import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Donations from "@/pages/donations/Donations";
import DonationDetail from "@/components/ui/DonationDetail";
import AdminLayout from "@/components/layout/AdminLayout";
import AllDonations from "@/pages/admin/AllDonations";
import CreateDonation from "@/pages/admin/CreateDonation";
import Dashboard from "@/pages/admin/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import Leaderboard from "@/pages/donations/Leaderboard";
import Community from "@/pages/community/Community";


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
                path: "/donations",
                element: <Donations />,
            },
            {
                path: "/donations/:id",
                element: <DonationDetail />,
            },
            {
                path: "/leaderboard",
                element: <Leaderboard />,
            },
            {
                path: "/community",
                element: <Community />,
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
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            }
            ,
            {
                path: "/dashboard/donations",
                element: <AllDonations />,
            },
            {
                path: "/dashboard/create-donation",
                element: <CreateDonation />,
            },
        ]
    },
]);

import { createBrowserRouter } from "react-router-dom";
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
import VolunteerForm from "@/components/forms/VolunteerForm";
import AboutPage from "@/pages/about/AboutPage";
import CreateTestimonial from "@/pages/admin/CreateTestimonial";
import App from "@/App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
                path: "/volunteer",
                element: <VolunteerForm />,
            },
            {
                path: "/about-us",
                element: <AboutPage />,
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
            {
                path: "/dashboard/create-testimonial",
                element: <CreateTestimonial />,
            },
        ]
    },
]);

import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useAppSelector((state) => state.auth);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;

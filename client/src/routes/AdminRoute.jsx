import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // Not logged in
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Logged in but NOT admin
    if (user.role !== "admin") {
        return <Navigate to="/" />;
    }

    // Admin → allow access
    return children;
};

export default AdminRoute;

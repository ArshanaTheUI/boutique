import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // Not logged in → go to login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Logged in → show page
    return children;
};

export default PrivateRoute;

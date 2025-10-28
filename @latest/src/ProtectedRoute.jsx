import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const session = localStorage.getItem("ticketapp_session");

    if (!session) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
}

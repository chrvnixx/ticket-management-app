
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/Signup";
import TicketManagement from "./components/Tickets/TicketManagement";
import { ToastContainer } from "react-toastify";


function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tickets" element={<TicketManagement />} />
        <Route path="/ticket-management" element={<TicketManagement />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ticket-management"
          element={
            <ProtectedRoute>
              <TicketManagement />
            </ProtectedRoute>
          }
        />
      </Routes>

    </>


  );
}

export default App;

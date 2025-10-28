import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./dashboard/dashboard.module.css";
import logoIcon from "../assets/icons8-tickets-48.png"

export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <aside className={styles.sidebar}>
            <div onClick={() => navigate("/")} className={styles.logoContainer}>
                <img className={styles.logoIcon} src={logoIcon} alt="Logo" />
                <p className={styles.logoText}> <strong>Ventix</strong></p>
            </div>

            <nav className={styles.nav}>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/tickets"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Ticket Management
                </NavLink>
            </nav>

            <div className={styles.profile}>
                <img
                    src="https://i.pravatar.cc/80?img=68"
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p>Taylor Smith</p>
                <span>taylor.smith@example.com</span>
                <button onClick={() => navigate("/login")} className={styles.logoutBtn}>Logout</button>
            </div>
        </aside>
    );
}

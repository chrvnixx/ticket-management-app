import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "./Dashboard.module.css";
import Header from "../Header";
import Footer from "../Footer";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("ticketapp_session");
        navigate("/"); 
    };

    return (
        <div className={styles.container}>
            <Sidebar />

            <main className={styles.main}>
                
                <div className={styles.dashboardHeader}>
                    <h1>Welcome back!</h1>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                <p>Here’s a summary of your tickets.</p>

                <div className={styles.stats}>
                    <div className={styles.card}>
                        <h2>152</h2>
                        <p>Total Tickets</p>
                        <span className={styles.growth}>+5.2% from last week</span>
                    </div>

                    <div className={styles.card}>
                        <h2>34</h2>
                        <p>Open Tickets</p>
                        <span className={styles.growth}>+1.8% from last week</span>
                    </div>

                    <div className={styles.card}>
                        <h2>118</h2>
                        <p>Resolved Tickets</p>
                        <span className={styles.growth}>+8.1% from last week</span>
                    </div>
                </div>

                <section className={styles.tableSection}>
                    <h2>Recent Tickets</h2>
                    <table className={styles.ticketTable}>
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Last Updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#8621</td>
                                <td>Login button not working on Safari</td>
                                <td>
                                    <span className={styles.statusOpen}>Open</span>
                                </td>
                                <td>2 hours ago</td>
                                <td>
                                    <button className={styles.linkBtn}>View Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#8620</td>
                                <td>Cannot export data to CSV</td>
                                <td>
                                    <span className={styles.statusResolved}>Resolved</span>
                                </td>
                                <td>5 hours ago</td>
                                <td>
                                    <button className={styles.linkBtn}>View Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#8619</td>
                                <td>API integration failing</td>
                                <td>
                                    <span className={styles.statusResolved}>Resolved</span>
                                </td>
                                <td>1 day ago</td>
                                <td>
                                    <button className={styles.linkBtn}>View Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#8618</td>
                                <td>User profile picture upload error</td>
                                <td>
                                    <span className={styles.statusOpen}>Open</span>
                                </td>
                                <td>1 day ago</td>
                                <td>
                                    <button className={styles.linkBtn}>View Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <Footer />
            </main>
        </div>
    );
}

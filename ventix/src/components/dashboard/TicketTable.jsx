
import styles from "./dashboard.module.css";

export default function TicketTable({ tickets, onEdit, onDelete }) {
    return (
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
                {tickets.length === 0 ? (
                    <tr>
                        <td colSpan="5" className={styles.empty}>No tickets found</td>
                    </tr>
                ) : (
                    tickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>#{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>
                                <span
                                    className={`${styles.status} ${ticket.status === "Open" ? styles.open : styles.resolved
                                        }`}
                                >
                                    {ticket.status}
                                </span>
                            </td>
                            <td>{ticket.updatedAt}</td>
                            <td>
                                <button
                                    className={styles.linkBtn}
                                    onClick={() => onEdit(ticket)}
                                >
                                    Edit
                                </button>
                                <button
                                    className={styles.deleteBtn}
                                    onClick={() => onDelete(ticket.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

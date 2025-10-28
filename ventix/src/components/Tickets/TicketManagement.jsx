import React, { useState, useEffect } from "react";
import styles from "./TicketManagement.module.css";
import Header from "../Header";
import Footer from "../Footer";

const TicketManagement = () => {
    const [tickets, setTickets] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");
    const [statusFilter, setStatusFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        setTickets(storedTickets);
    }, []);

    useEffect(() => {
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }, [tickets]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return alert("Please fill all fields");

        const newTicket = {
            id: Date.now(),
            title,
            description,
            priority,
            status: "Open",
            createdAt: new Date().toLocaleDateString(),
        };

        if (editIndex !== null) {
            const updated = [...tickets];
            updated[editIndex] = { ...updated[editIndex], title, description, priority };
            setTickets(updated);
            setEditIndex(null);
        } else {
            setTickets([...tickets, newTicket]);
        }

        setTitle("");
        setDescription("");
        setPriority("Low");
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            setTickets(tickets.filter((t) => t.id !== id));
        }
    };

    const handleEdit = (index) => {
        const t = tickets[index];
        setTitle(t.title);
        setDescription(t.description);
        setPriority(t.priority);
        setEditIndex(index);
    };

    const handleStatusChange = (id, newStatus) => {
        setTickets(tickets.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
    };

    const filteredTickets = tickets.filter((t) => {
        const matchesFilter = statusFilter === "All" || t.status === statusFilter;
        const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className={styles.wrapper}>
            <Header/>
            <h2>Ticket Management</h2>
            <div className={styles.layout}>

                <div className={styles.createSection}>
                    <h3>{editIndex !== null ? "Edit Ticket" : "Create New Ticket"}</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>Ticket Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Website login issue"
                        />

                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Provide a detailed description..."
                        />

                        <label>Priority</label>
                        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>

                        <button type="submit">
                            {editIndex !== null ? "Update Ticket" : "Submit Ticket"}
                        </button>
                    </form>
                </div>


                <div className={styles.ticketSection}>
                    <div className={styles.topBar}>
                        <input
                            type="text"
                            placeholder="Search by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className={styles.filters}>
                            {["All", "Open", "In Progress", "Closed"].map((filter) => (
                                <button
                                    key={filter}
                                    className={statusFilter === filter ? styles.active : ""}
                                    onClick={() => setStatusFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filteredTickets.length ? (
                        filteredTickets.map((ticket, index) => (
                            <div key={ticket.id} className={styles.ticketCard}>
                                <div className={styles.ticketHeader}>
                                    <span className={`${styles.status} ${styles[ticket.status.replace(/\s+/g, "").toLowerCase()]}`}>
                                        {ticket.status}
                                    </span>
                                    <span className={`${styles.priority}`}>Priority: {ticket.priority}</span>
                                </div>
                                <h4>{ticket.title}</h4>
                                <p>{ticket.description}</p>
                                <small>Created: {ticket.createdAt}</small>

                                <div className={styles.cardActions}>
                                    <div className={styles.statusButtons}>
                                        <button onClick={() => handleStatusChange(ticket.id, "Open")}>Open</button>
                                        <button onClick={() => handleStatusChange(ticket.id, "In Progress")}>In Progress</button>
                                        <button onClick={() => handleStatusChange(ticket.id, "Closed")}>Closed</button>
                                    </div>
                                    <div className={styles.editDelete}>
                                        <button onClick={() => handleEdit(index)}>✏️</button>
                                        <button onClick={() => handleDelete(ticket.id)}>🗑️</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noTickets}>
                            <p>No tickets found</p>
                            <small>Create a new ticket to get started!</small>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TicketManagement;

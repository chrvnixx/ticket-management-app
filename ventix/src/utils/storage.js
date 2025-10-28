const STORAGE_KEY = "tickets";

export const getTickets = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addTicket = (ticket) => {
  const tickets = getTickets();
  tickets.push(ticket);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const updateTicket = (updatedTicket) => {
  const tickets = getTickets().map((t) =>
    t.id === updatedTicket.id ? updatedTicket : t
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const deleteTicket = (id) => {
  const tickets = getTickets().filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

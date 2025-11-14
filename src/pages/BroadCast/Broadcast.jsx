import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Broadcast.css";

const Broadcast = () => {
  const [broadcastsBySeller, setBroadcastsBySeller] = useState({});
  const [selectedSeller, setSelectedSeller] = useState(null);

  useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/broadcast/all");
        if (res.data.success) {
          const grouped = res.data.data.reduce((acc, item) => {
            const seller = item.sellerName || "Unknown Seller";
            if (!acc[seller]) acc[seller] = [];
            acc[seller].push(item);
            return acc;
          }, {});
          setBroadcastsBySeller(grouped);
          // Set first seller as default
          const firstSeller = Object.keys(grouped)[0];
          if (firstSeller) setSelectedSeller(firstSeller);
        }
      } catch (err) {
        console.error("Error fetching broadcasts:", err);
      }
    };
    fetchBroadcasts();
  }, []);

  const sellerNames = Object.keys(broadcastsBySeller);

  return (
    <div className="broadcast-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">🛍 Sellers</h3>
        <ul className="seller-list">
          {sellerNames.length === 0 ? (
            <li className="no-sellers">No Sellers Found</li>
          ) : (
            sellerNames.map((seller) => (
              <li
                key={seller}
                className={`seller-item ${
                  selectedSeller === seller ? "active" : ""
                }`}
                onClick={() => setSelectedSeller(seller)}
              >
                {seller}
              </li>
            ))
          )}
        </ul>
      </aside>

      {/* Main content */}
      <main className="broadcast-content">
        <h2 className="broadcast-heading">📢 Announcements</h2>
        {!selectedSeller ? (
          <p className="no-message">Select a seller to view announcements.</p>
        ) : (
          <div>
            <h3 className="seller-header">{selectedSeller}</h3>
            <div className="messages">
              {broadcastsBySeller[selectedSeller].map((msg) => (
                <div key={msg._id} className="message-card">
                  <h4>{msg.title}</h4>
                  <p>{msg.message}</p>
                  <small>
                    {new Date(msg.date).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Broadcast;

import React, { useState } from 'react';

function UserTile({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="card">
      <h3 className="card-title">{user.name}</h3>
      <p className="card-info">@{user.username}</p>

      <button
        onClick={() => setShowInfo(!showInfo)}
        className={`btn ${showInfo ? 'btn-primary' : 'btn-outline'}`}
        style={{ width: '100%', borderLeft: '4px solid var(--secondary)' }}
      >
        {showInfo ? "Hide Details" : "Show Details"}
      </button>

      {showInfo && (
        <div className="details">
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Web:</span>
            <span className="detail-value" style={{ color: 'var(--primary)' }}>{user.website}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTile;

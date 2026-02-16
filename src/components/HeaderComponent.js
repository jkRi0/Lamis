import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header className="app-header">
      <div className="header-container">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>StudentInfo</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/students" className="nav-link">Students</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;

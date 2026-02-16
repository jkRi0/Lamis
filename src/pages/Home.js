import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTile from '../components/UserTile';

function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch student data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="main-content">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ fontSize: '3rem' }}>Welcome to StudentInfo</h2>
        <p className="section-subtitle" style={{ fontSize: '1.25rem' }}>A centralized dashboard to manage and view student information.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid var(--border)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Loading student data...</p>
          </div>
        )}
        {error && <p style={{ color: '#ef4444', textAlign: 'center', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fee2e2' }}>{error}</p>}
        {!loading && !error && (
          <div className="card-grid">
            {students.map((user) => (
              <UserTile key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

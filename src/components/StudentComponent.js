import React from 'react';

function StudentComponent({ name, course, year }) {
  const badgeStyle = {
    backgroundColor: 'var(--secondary)',
    color: 'var(--white)',
    padding: '4px 8px',
    fontSize: '0.7rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  };

  return (
    <div className="card">
      <div style={{ marginBottom: '1rem' }}>
        <span style={badgeStyle}>{year}</span>
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-info">{course}</p>
      
      <div className="details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)' }}></span>
          Active
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>ID: 2024-STUD</span>
      </div>
    </div>
  );
}

export default StudentComponent;

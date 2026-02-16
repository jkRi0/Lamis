import React, { useState } from 'react';
import StudentComponent from '../components/StudentComponent';

function Students() {
  const [showAll, setShowAll] = useState(true);

  const students = [
    { id: 1, name: 'Alice Thompson', course: 'BS Information Technology', year: '4th Year' },
    { id: 2, name: 'Benjamin Parker', course: 'BS Information Technology', year: '4th Year' },
    { id: 3, name: 'Catherine Hayes', course: 'BS Information Technology', year: '4th Year' },
    { id: 4, name: 'David Miller', course: 'BS Information Technology', year: '4th Year' },
    { id: 5, name: 'Eleanor Vance', course: 'BS Computer Science', year: '3rd Year' },
    { id: 6, name: 'Franklin Moore', course: 'BS Computer Science', year: '2nd Year' },
    { id: 7, name: 'Grace Collins', course: 'BS Computer Science', year: '1st Year' },
    { id: 8, name: 'Henry Ford', course: 'BS Computer Science', year: '4th Year' },
  ];

  const visibleStudents = showAll ? students : students.filter(s => s.course === 'BS Information Technology');

  return (
    <div className="main-content">
      <div className="filter-container" style={{ alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h2 className="section-title">Student Directory</h2>
          <p className="section-subtitle" style={{ margin: 0 }}>Browse and filter through our list of currently enrolled students.</p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className={`btn ${showAll ? 'btn-outline' : 'btn-primary'}`}
          style={{ padding: '0.75rem 1.5rem' }}
        >
          {showAll ? 'Filter BSIT Only' : 'Show All Students'}
        </button>
      </div>

      <div className="card-grid">
        {visibleStudents.map(student => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;

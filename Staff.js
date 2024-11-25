import React from 'react';
import './Staff.css';

const Staff = () => {
  const housekeepers = [
    { id: 1, name: 'Fatima', status: 'Available', matricule: 'Fm10' },
    { id: 2, name: 'Zahra', status: 'Unavailable', matricule: 'Fm20' },
  ];
  const technicians = [
    { id: 1, name: 'Said', status: 'Available', matricule: 'Tech11' },
    { id: 2, name: 'Mohamed', status: 'On Break', matricule: 'Tech22' },
  ];

  // Combine les deux listes de personnel
  const staffList = [...housekeepers, ...technicians];

  return (
    <div className="staff-container">
      <h1>Liste du Personnel</h1>

      <div className="staff-section">
        <div className="staff-column">
          <h2>Femmes de Ménage</h2>
          <ul>
            {housekeepers.map((staff) => (
              <li key={staff.id}>
                {staff.name} - {staff.status} - Matricule: {staff.matricule}
              </li>
            ))}
          </ul>
        </div>

        <div className="staff-column">
          <h2>Techniciens</h2>
          <ul>
            {technicians.map((staff) => (
              <li key={staff.id}>
                {staff.name} - {staff.status} - Matricule: {staff.matricule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Staff;

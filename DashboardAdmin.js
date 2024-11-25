import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom'; 
import EmployeeLogin from './EmployeeLogin'; // Ajoutez l'importation de EmployeeLogin

const DashboardAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirection vers la page de connexion AdminLogin
  };

  const goToReservations = () => {
    navigate('/dashboard/reservations');
  };

  const goToRooms = () => {
    navigate('/dashboard/rooms');
  };

  const goToStaff = () => {
    navigate('/dashboard/staff');
  };

  const goToEmployeeLogin = () => {
    navigate('/employee-login'); // Redirection vers la page de connexion Employé
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ color: '#fff' }}>Dashboard</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem} onClick={goToReservations}>Réservations</li>
          <li style={styles.sidebarItem} onClick={goToRooms}>Chambres</li>
          <li style={styles.sidebarItem} onClick={goToStaff}>Staff</li>
          <li style={styles.sidebarItem}>Commentaires</li>
          <li style={styles.sidebarItem}>Photos</li>
          <li style={styles.sidebarItem}>Analyses</li>
          <li style={styles.sidebarItem}>Paramètres</li>
        </ul>
        <button style={styles.logoutButton} onClick={handleLogout}>Se déconnecter</button>
      </div>

      {/* Contenu principal */}
      <div style={styles.mainContent}>
        <h1>Bienvenue sur le Dashboard Admin</h1>
        <p>Voici les différentes sections de gestion :</p>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  sidebarItem: {
    margin: '15px 0',
    cursor: 'pointer',
    fontSize: '18px',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '10px',
    marginTop: 'auto', 
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  mainContent: {
    marginLeft: '260px', 
    padding: '20px',
    width: 'calc(100% - 260px)',
  },
};

export default DashboardAdmin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLogin.css'; // Assurez-vous d'ajouter du style

const EmployeeLogin = ({ staffList }) => {
  const [matricule, setMatricule] = useState('');
  const navigate = useNavigate();

  const handleEmployeeLogin = (e) => {
    e.preventDefault();

    // Vérifie si le matricule existe dans la liste des employés
    const employee = staffList.find(staff => staff.matricule === matricule);
    
    if (employee) {
      navigate('/employee-dashboard'); // Redirige vers le dashboard employé
    } else {
      alert('Matricule incorrect');
    }
  };

  return (
    <div className="employee-login-page">
      <form className="employee-login-form" onSubmit={handleEmployeeLogin}>
        <h2>Connexion Employé</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Entrez votre matricule"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;

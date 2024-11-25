import React from 'react';
import './Rooms.css'; // Importation du fichier CSS

const Rooms = () => {
  const rooms = [
    { id: 1, number: '101', type: 'Chambre Double', status: 'Available' },
    { id: 2, number: '102', type: 'Chambre Deluxe', status: 'Occupied' },
    { id: 3, number: '103', type: 'Chambre avec Terrasse', status: 'Under Maintenance' },
    { id: 4, number: '104', type: 'Suit Room', status: 'Available' },
    { id: 5, number: '105', type: 'King Room', status: 'Occupied' },
    { id: 6, number: '106', type: 'Queen Room avec Balcon', status: 'Under Maintenance' },
  ];

  const availableRooms = rooms.filter(room => room.status === 'Available');
  const occupiedRooms = rooms.filter(room => room.status === 'Occupied');
  const maintenanceRooms = rooms.filter(room => room.status === 'Under Maintenance');

  return (
    <div className="rooms-container">
      <h1>Liste des Chambres</h1>

      <div className="rooms-sections-wrapper">
        {/* Chambres Disponibles */}
        <div className="rooms-section">
          <h2>Disponibles</h2>
          <ul className="rooms-list">
            {availableRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status available">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chambres Occupées */}
        <div className="rooms-section">
          <h2>Occupées</h2>
          <ul className="rooms-list">
            {occupiedRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status occupied">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chambres Sous Maintenance */}
        <div className="rooms-section">
          <h2>Sous Maintenance</h2>
          <ul className="rooms-list">
            {maintenanceRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status maintenance">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

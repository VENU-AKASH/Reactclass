import React from 'react';

const UserCard = ({ name, age, city, mobile, email, occupation, address }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.detail}><strong>Age:</strong> {age}</p>
      <p style={styles.detail}><strong>City:</strong> {city}</p>
      <p style={styles.detail}><strong>Mobile Number:</strong> {mobile}</p>
      <p style={styles.detail}><strong>Email:</strong> {email}</p>
      <p style={styles.detail}><strong>Occupation:</strong> {occupation}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    textAlign: 'left',
  },
  name: {
    color: '#1a56db',
    margin: '0 0 8px 0',
    fontSize: '18px',
  },
  detail: {
    margin: 0,
    fontSize: '13px',
    color: '#333',
  },
};

export default UserCard;
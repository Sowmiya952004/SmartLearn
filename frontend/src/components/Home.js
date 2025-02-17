import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.logo}>SMART</h1>
        <button onClick={goToLogin} style={styles.loginButton}>Login</button>
      </header>

      {/* Body Section */}
      <main style={styles.body}>
        <div style={styles.center}>
          {/* Image Section */}
          <img
            src="logosm.png" // Replace with your actual image URL
            alt="About SMART"
            style={styles.largeImage}  // Updated the style for a larger image
          />
          {/* Text Section */}
        </div>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 SMART. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#007bff', // Changed to blue
    color: 'white',
    display: 'flex',
    justifyContent: 'center', // Center SMART logo
    alignItems: 'center',
    padding: '30px 40px',
    position: 'relative', // To position the login button on the right
  },
  logo: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'white',
    color: '#007bff', // Button color updated to blue
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px', // Positioned to the right
  },
  body: {
    backgroundColor: '#e6f7ff', // Light blue background
    padding: '20px',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  largeImage: {
    width: '500px', // Increased size of the image
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px', // Space below image
  },
  footer: {
    backgroundColor: '#007bff', // Same blue as header
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
};

export default Home;

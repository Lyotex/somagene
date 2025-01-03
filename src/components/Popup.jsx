import React from 'react'

const Popup = ({ onClose }) => {
    return (
      <div style={popupStyles.overlay}>
        <div style={popupStyles.container}>
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <button onClick={onClose} style={popupStyles.button}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  const popupStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    container: {
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      maxWidth: "400px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px",
      border: "none",
      background: "#007BFF",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  

export default Popup

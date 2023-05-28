import React from 'react';
import Modal from 'react-modal';
import "../alert/AlertPopUp.css";


const modalStyles = {
  content: {
    width: '600px',
    height: '300px',
    margin: 'auto',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    background: '#17213C',
    color: '#fff',
  },
};


const AlertPopup = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      ariaHideApp={false} 
    >
      <h3>{message}</h3>
      <button onClick={onClose} class="button-3">Close</button>
    </Modal>
  );
};

export default AlertPopup;
import React from "react";
import '../CatalogueItems/CatalogueItems.css'
const modal = {
  position: "fixed",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
};

const close = {
  position: "absolute",
 
  color: "#fff",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer",
};

const modalContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center content horizontally
  width: "85%",
  height:"85%",
  justifyContent:"center",
  padding: "20px",
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}>{children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose} className="close-btn">
        &times;
      </span>
      <div style={modalContent} className="child-img">{children}</div>
    </div>
  );
};

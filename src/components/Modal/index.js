import React from "react";

function Modal({ onClose, currentProject }) {
  const { title, subtitle, category, description, link, github, index } = currentProject;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title}</h3>
        <h4>{subtitle}</h4>
        <img
          src={require(`../../assets/${category}/${index}.gif`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button onClick={onClose} type="button">
          Close this modal
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = { link };
          }}
        >
          Live Page
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = { github };
          }}
        >
          Github Link
        </button>
      </div>
    </div>
  );
}

export default Modal;

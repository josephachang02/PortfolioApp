import React from 'react'

const IconButton = ({ icon, className, onClick }) => {
    return (
      <button className={`icon-button ${className}`} onClick={onClick}>
        {icon}
      </button>
    );
  };

export default IconButton
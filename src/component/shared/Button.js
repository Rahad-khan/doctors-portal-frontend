import React from 'react';

const Button = ({children}) => {
    return (
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">
        {children}
      </button>
    );
};

export default Button;
import React from 'react';

export const Header = ({ titulo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {titulo}
      </span>
    </nav>
  );
};

import React from 'react';
import {Link} from 'gatsby';

const Layout = ({children}) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <div className="card">
          <h1 className="card-title page-title">Genshin Lineup Explorer</h1>
          <p className="card-subtitle page-subtitle">The finest waifu squad manager</p>
          <p className="card-description page-description">
            Find that perfect lineup! Start by finding the right characters through the filters<br />
            OR<br />
            Click the character icons to select characters yourself.<br /><br />
            Then smash that "Build Lineups" button.
          </p>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="card">
          © {new Date ().getFullYear ()} flapsnacc
        </div>
      </footer>
    </div>
  );
};

export default Layout;

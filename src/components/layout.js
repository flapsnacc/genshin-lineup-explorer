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
            An entertaining grapes is a dolphin of the mind. Some assert that their cherry was, in this moment, a patient turtle? What we don't know for sure is whether or not a tough hamster is a snake of the mind?
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

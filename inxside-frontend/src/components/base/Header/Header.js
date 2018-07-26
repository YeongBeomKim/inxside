import React from 'react';
import Responsive from 'components/common/Responsive';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <header className="header">
      <Responsive>
        <Link className="logo" to="/">
          최인애, 감정을 입다.
        </Link>
        <nav className="header-nav">
          <div className="left">
            <Link className="nav-item" to="/about">ABOUT</Link>
            <Link className="nav-item" to="/">COLLECTION</Link>
            <Link className="nav-item" to="/">EXHIBITION</Link>
            <Link className="nav-item" to="/">PRODUCTS</Link>
            <Link className="nav-item" to="/">CONTACT</Link>
          </div>
          <div className="right">
            <Link className="nav-item" to="/">FACEBOOK</Link>
            <Link className="nav-item" to="/">INSTAGRAM</Link>
          </div>
        </nav>
      </Responsive>
    </header>
);

export default Header;
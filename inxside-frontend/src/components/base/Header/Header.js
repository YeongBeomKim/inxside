import React, { type Node } from 'react';
import Responsive from 'components/common/Responsive';
import { Link } from 'react-router-dom';

import './Header.scss';

type Props = {

};

const Header = () => (
    <header>
      <Responsive>
        <div className="Header">
        </div>
      </Responsive>
    </header>
);

export default Header;
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHomeAlt, BiAward, BiBookBookmark } from 'react-icons/bi';
import './Menu.scss';

const Menu = () => {
  const [state, setState] = useState('/home');
  const { pathname } = useLocation();

  useEffect(() => {
    setState(pathname);
  }, [pathname]);

  const getFill = (path: string): string =>
    state === path ? '#7B61FF' : '#828282';

  return (
    <div className="menu">
      <Link to="/playzone">
        <div className="menu-item">
          <BiHomeAlt fill={getFill('/playzone')} size="36px" />
        </div>
      </Link>
      <Link to="/playzone/award">
        <div className="menu-item">
          <BiAward fill={getFill('/playzone/award')} size="36px" />
        </div>
      </Link>
      <Link to="/playzone/bookmark">
        <div className="menu-item">
          <BiBookBookmark fill={getFill('/playzone/bookmark')} size="36px" />
        </div>
      </Link>
    </div>
  );
};

export default Menu;

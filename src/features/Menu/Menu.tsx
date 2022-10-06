import { NavLink } from 'react-router-dom';

import './Menu.scss';

export const Menu: React.FC = () => {
  return (
    <menu className="Menu">
      <div className="Menu__logo-container">
        <img
          src="./logo.svg"
          alt="logo"
          className="Menu__logo"
        />
      </div>

      <ul className="Menu__list">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => `Menu__link ${isActive && 'active'}`}
          >
            <i className="Menu__icon fas fa-home" />

            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/play"
            className={({ isActive }) => `Menu__link ${isActive && 'active'}`}
          >
            <i className="Menu__icon fas fa-circle-play" />

            Play
          </NavLink>
        </li>
      </ul>
    </menu>
  );
};

import { Link } from 'react-router-dom';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <div>
        <h1 className="Header__title">Workbook</h1>
        <h2 className="Header__subtitle">Welcome, to your own libary</h2>
      </div>

      <Link to="/form" className="Header__link">
        +Add new
      </Link>
    </header>
  );
};

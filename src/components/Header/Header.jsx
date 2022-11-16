import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Sprite from '../../images/logo/logo-04-07.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NavLink href="/">
            <svg className={styles.logo}>
              <use href={`${Sprite}#icon-Logo-07`}></use>
            </svg>
          </NavLink>
          {/* nav */}
          <div>
            <NavLink
              to="/"
              exact={true}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
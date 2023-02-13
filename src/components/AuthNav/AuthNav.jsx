import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={style.authNav}>
      <NavLink to={'/register'} className={style.header__link}>
        Register
      </NavLink>
      <NavLink to={'/login'} className={style.header__link}>
        Log In
      </NavLink>
    </div>
  );
};

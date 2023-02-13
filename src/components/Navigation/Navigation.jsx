import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import style from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink to="/" className={style.header__link}>
        <BsFillJournalBookmarkFill className={style.header__icon} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to={'/contacts'} className={style.header__link}>
          Contacts
        </NavLink>
      )}
    </>
  );
};

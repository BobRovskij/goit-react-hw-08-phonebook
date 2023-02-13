import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';

import style from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={style.userMenu}>
      <p className={style.userName}>Hello, {name}!</p>
      <button type="button" className={style.logOutBtn} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

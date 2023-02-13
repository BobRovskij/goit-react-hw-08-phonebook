import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import style from './Authorized.module.css';

export const Authorized = () => {
  const name = useSelector(selectUserName);

  return (
    <div className={style.success}>
      <h2 className={style.title}>Hi, {name}!</h2>
      <p className={style.notification}>
        You can now go to your{' '}
        <Link to={'/contacts'} className={style.link}>
          Contacts
        </Link>
        .
      </p>
      <img
        src={require('../../images/v2.png')}
        alt="welcome"
        className={style.image}
      />
    </div>
  );
};

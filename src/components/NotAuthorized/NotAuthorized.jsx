import { Link } from 'react-router-dom';
import style from './NotAuthorized.module.css';

export const NotAuthorized = () => {
  return (
    <div className={style.unauthorized}>
      <h2 className={style.title}>
        Hello, you have entered the Phonebook application!
      </h2>
      <p className={style.notification}>
        Using Phonebook, you can save your contacts.
      </p>
      <img
        src={require('../../images/v2.png')}
        alt="welcome"
        className={style.image}
      />
      <p className={style.choice}>
        To get started, you need to{' '}
        <Link to={'/register'} className={style.link}>
          register
        </Link>{' '}
        here.
      </p>
      <p className={style.choice}>
        If you already have a Phonebook account{' '}
        <Link to={'/login'} className={style.link}>
          log in
        </Link>{' '}
        to experience the benefits of our application faster.
      </p>
    </div>
  );
};

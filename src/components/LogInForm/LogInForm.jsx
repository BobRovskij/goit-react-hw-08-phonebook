import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import style from './LogInForm.module.css';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={style.title}>Sign in below</h2>
      <form className={style.logInForm} onSubmit={handleSubmit}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <label htmlFor="emailInputId" className={style.label}>
              <HiOutlineMail className={style.icon} /> Email
            </label>
            <input
              type="email"
              name="email"
              id="emailInputId"
              required
              className={style.input}
              value={email}
              onChange={handleChange}
            />
          </li>
          <li className={style.listItem}>
            <label htmlFor="passwordInputId" className={style.label}>
              <RiLockPasswordLine className={style.icon} /> Password
            </label>
            <input
              type="password"
              name="password"
              id="passwordInputId"
              required
              className={style.input}
              value={password}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit" className={style.submitBtn}>
          Sign In
        </button>
      </form>
      <h3 className={style.notice}>
        Don't have an account yet?{' '}
        <Link to={'/register'} className={style.link}>
          Sign up here!
        </Link>
      </h3>
    </>
  );
};

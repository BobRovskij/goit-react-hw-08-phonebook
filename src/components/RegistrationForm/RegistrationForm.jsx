import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import style from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={style.title}>Fill out the following form to register</h2>
      <form className={style.registrationForm} onSubmit={handleSubmit}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <label htmlFor="nameInputId" className={style.label}>
              <BsFillPersonFill className={style.icon} /> Name
            </label>
            <input
              type="text"
              name="name"
              id="nameInputId"
              required
              className={style.input}
              value={name}
              onChange={handleChange}
            />
          </li>
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
          Register
        </button>
      </form>
      <h3 className={style.notice}>
        Already have an account?{' '}
        <Link to={'/login'} className={style.link}>
          Log in here!
        </Link>
      </h3>
    </>
  );
};

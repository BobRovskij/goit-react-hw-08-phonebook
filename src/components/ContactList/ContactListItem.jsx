import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/API';
import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={style.contacts__listItem}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        className={style.contacts__delBtn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

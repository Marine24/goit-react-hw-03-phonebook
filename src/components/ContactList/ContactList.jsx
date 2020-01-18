import React from 'react';
import T from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {items.map(el => (
        <li key={el.id} className={style.contactItem}>
          <ContactItem
            name={el.name}
            number={el.number}
            onDeleteContact={() => onDeleteContact(el.id)}
          />
        </li>
      ))}
    </ul>
  );
};
ContactList.defaultProps = {
  items: [],
};
ContactList.propTypes = {
  items: T.arrayOf(
    T.shape({
      name: T.string,
      number: T.string,
    }),
  ),
  onDeleteContact: T.func.isRequired,
};
export default ContactList;

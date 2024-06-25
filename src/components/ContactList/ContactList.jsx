import styles from './ContactList.module.css';
// import Contact from '../Contact/Contact';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <><li className={styles.contactName} key={contact.id}>{contact.name}</li>
          <li className={styles.contactNumber}>{contact.number}</li>
          <button className={styles.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;


// src/components/ContactList/ContactList.jsx




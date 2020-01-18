import React, { Component } from 'react';
import generateID from 'uuid/v4';
import styles from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const notesFromLS = localStorage.getItem('contacts');
    if (notesFromLS) {
      this.setState({ contacts: JSON.parse(notesFromLS) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contactToAdd = { name, number, id: generateID() };
    if (name && number) {
      if (!isNaN(number) && isNaN(name)) {
        if (
          contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
          )
        ) {
          alert(`${name} is already in your contacts`);
          return;
        }
        this.setState(state => ({
          contacts: [...state.contacts, contactToAdd],
        }));
      } else {
        alert('One of the fields is incorrect!');
      }
    } else {
      alert('One of the fields is empty! Please fill all the fields!');
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
          id={generateID()}
        />
      </div>
    );
  }
}

export default App;

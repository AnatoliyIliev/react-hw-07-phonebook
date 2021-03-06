import React from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

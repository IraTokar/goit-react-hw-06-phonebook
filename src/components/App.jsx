
import React from 'react';
import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';


export const App = () => {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
       
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    )
  }

export default App;

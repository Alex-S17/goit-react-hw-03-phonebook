import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactList";
import { Form } from "./Form";
import { Filter } from "./Filter";
import css from "./App.module.css";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormData = stateFromForm => {
    const { contacts } = this.state;
    const { name, number } = stateFromForm;
    const arrayOfNames = contacts.map(contact => contact.name);
    const nameToLowerCase = name.toLowerCase();
    const nameIsPresent = arrayOfNames.find(element => element.toLowerCase() === nameToLowerCase);
    if (!nameIsPresent) {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      this.setState({ contacts: [...contacts, newContact], });              
      return true;
    };
    return alert(`${name} is already in contacts`);        
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
 
  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleFormData} />
        <h1>Contacts</h1>
        <div className={css.contactsWrapper}>
          <Filter
            filter={this.state.filter}
            onChange={this.changeFilter}
          />
          <ContactsList
            arrayOfContacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  };
};






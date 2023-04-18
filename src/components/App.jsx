import { Component } from 'react';
//COMPONENTS
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
//STYLES
import { Section, Container, Content, Title } from './App.styled';

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

  addContact = contact => {
    if (this.checkForDuplicate(contact.name)) {
      alert('В тебе вже є такий контакт!');
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  checkForDuplicate = name => {
    const normalizedName = name.toLowerCase();
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <Section>
        <Container>
          <Content>
            <Title> Книга контактів</Title>
            <ContactForm addContact={this.addContact} />
            <Filter
              filter={this.state.filter}
              onFilterChange={this.onFilterChange}
            />
            <ContactList
              isContacts={this.state.contacts.length}
              contacstList={visibleContact}
              deleteContact={this.deleteContact}
            />
          </Content>
        </Container>
      </Section>
    );
  }
}

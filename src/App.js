import { Container, ListTitle } from "./App.styled";
import shortid from "shortid";
import PropTypes from "prop-types";
import React from "react";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onValidate: PropTypes.func,
    onChange: PropTypes.func,
    onDeleteContact: PropTypes.func,
  };

  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  validateContact = (contactName) => {
    let isDuplicate = !!this.state.contacts.find(
      (contact) => contact.name === contactName
    );
    return !isDuplicate;
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  render() {
    const filteredContacts = this.getFilteredContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} onValidate={this.validateContact} />
        <ListTitle>Contacts</ListTitle>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;

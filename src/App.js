import { Container, ListTitle } from "./App.styled";
import shortid from "shortid";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

export default function App() {
  // static propTypes = {
  //   contacts: PropTypes.array,
  //   value: PropTypes.string,
  //   onSubmit: PropTypes.func,
  //   onValidate: PropTypes.func,
  //   onChange: PropTypes.func,
  //   onDeleteContact: PropTypes.func,
  // };

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts((prevState) => [contact, ...prevState]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContact();

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const validateContact = (contactName) => {
    let isDuplicate = !!contacts.find(
      (contact) => contact.name === contactName
    );
    return !isDuplicate;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} onValidate={validateContact} />
      <ListTitle>Contacts</ListTitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <Contacts contacts={filteredContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

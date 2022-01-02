import React from "react";
import { AddButton } from "./Form.styled";

class Form extends React.Component {
  state = { name: "", number: "" };

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  disabledButton = () => {
    if (!this.props.onValidate(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.disabledButton}>
        <label>
          name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </label>
        <AddButton type="submit"> Add contact </AddButton>
      </form>
    );
  }
}

export default Form;

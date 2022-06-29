import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputID = nanoid();

  const handleChangeName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const filterInput = e => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const deleteContact = numID => {
    setContacts(contacts.filter(({ id }) => id !== numID));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let arrayOfContactsNames = contacts.map(arr => arr.name);
    if (arrayOfContactsNames.includes(name)) {
      alert(`${name} is already in contacts!`);
    } else {
      setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
    }
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        inputID={inputID}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Contacts</h2>
      <Filter filterInput={filterInput} />
      <ContactList
        filter={filter}
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default Phonebook;

// class Phonebook2 extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//     name: "",
//     number: "",
//   };

//   inputID = nanoid();

//   // Odpowiada za aktualizację stanu
//   handleChangeName = (e) => {
//     e.preventDefault();
//     this.setState((state) => ({
//       ...state,
//       name: e.target.value,
//     }));
//   };

//   handleChangeNumber = (e) => {
//     e.preventDefault();
//     this.setState((state) => ({
//       ...state,
//       number: e.target.value,
//     }));
//   };

//   filterInput = (e) => {
//     e.preventDefault();
//     this.setState((state) => ({
//       ...state,
//       filter: e.target.value,
//     }));
//     // console.log(this.state.filter);
//   };

//   deleteContact = (numID) => {
//     this.setState((state) => ({
//       ...state,
//       contacts: this.state.contacts.filter(({ id }) => id !== numID),
//     }));
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let arrayOfContactsNames = this.state.contacts.map((arr) => arr.name);
//     if (arrayOfContactsNames.includes(this.state.name)) {
//       alert(`${this.state.name} is already in contacts!`);
//     } else {
//       this.setState((state) => ({
//         contacts: [
//           ...state.contacts,
//           { id: nanoid(), name: this.state.name, number: this.state.number },
//         ],
//       }));
//     }

//     // console.log(this.state.contacts);

//     // e.preventDefault();
//     // let newContacts = this.state.contacts;
//     // newContacts.push(this.state.name);
//     // this.setState({ contacts: newContacts });
//     // console.log(this.state.contacts);
//   };

//   addContactToLocalStorage = () => {
//     localStorage.setItem("Contacts", JSON.stringify(this.state.contacts));
//   };

//   componentDidMount() {
//     let getContacts = localStorage.getItem("Contacts");

//     getContacts
//       ? this.setState({ contacts: JSON.parse(getContacts) })
//       : this.addContactToLocalStorage();
//   }

//   componentDidUpdate() {
//     this.addContactToLocalStorage();
//   }

//   render() {
//     // const { name } = this.state;
//     // const { contacts } = this.state;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm
//           handleSubmit={this.handleSubmit}
//           handleChangeName={this.handleChangeName}
//           inputID={this.inputID}
//           handleChangeNumber={this.handleChangeNumber}
//         />
//         <h2>Contacts</h2>
//         <Filter filterInput={this.filterInput} />
//         <ContactList
//           filter={this.state.filter}
//           contacts={this.state.contacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default Phonebook2;

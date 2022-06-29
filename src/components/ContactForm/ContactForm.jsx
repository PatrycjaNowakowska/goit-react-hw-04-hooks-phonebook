import React from "react";
import styles from "../Styles.module.css";

const ContactForm = ({
  handleSubmit,
  handleChangeName,
  inputID,
  handleChangeNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <br></br>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            //   value={this.state.name}
            onChange={handleChangeName}
            id={inputID}
          />
          <br></br>
        </label>
        <label>
          Number
          <br></br>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            //   value={this.state.number}
            onChange={handleChangeNumber}
            id={inputID}
          />
          <br></br>
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
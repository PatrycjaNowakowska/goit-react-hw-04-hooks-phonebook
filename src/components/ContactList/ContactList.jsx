import React from "react";
import styles from "../Styles.module.css";

const ContactList = ({ filter, contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.list}>
        {filter === ""
          ? contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button
                  type="button"
                  onClick={() => deleteContact(id)}
                  className={styles.btn}
                >
                  DELETE
                </button>
              </li>
            ))
          : contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                  <button
                    type="button"
                    onClick={() => deleteContact(id)}
                    className={styles.btn}
                  >
                    DELETE
                  </button>
                </li>
              ))}
      </ul>
    </div>
  );
};

export default ContactList;
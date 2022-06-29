import React from "react";
import styles from "../Styles.module.css";

const Filter = ({ filterInput }) => {
  return (
    <div className={styles.form}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter by name"
        onChange={filterInput}
      />
    </div>
  );
};

export default Filter;
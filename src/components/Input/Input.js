import React from "react";
import Proptypes from 'prop-types';
import styles from './Input.module.scss'



const Input = ({tag: Tag, name, label, maxLength}) => (
        <div className={styles.formItem}>
        <Tag
          className={Tag === 'textarea' ? styles.textarea : styles.input}
          type="text"
          name={name}
          id="name"
          maxLength={maxLength}
        />
        <label className={styles.label} htmlFor="name">
          {label}
        </label>
        <div className={styles.formItemBar} />
      </div>
)
Input.propTypes = {
    tag: Proptypes.string,
    name: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    maxLength: Proptypes.number
}
Input.defaultProps = {
    tag: 'input',
    maxLength: 200
}


export default Input;
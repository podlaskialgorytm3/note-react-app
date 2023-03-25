import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button.js"
import Title from "../Title/Title";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add New Item!</Title>
    <form autoComplete='off' className={styles.form} onSubmit={submitFn}>
      <Input 
      name="name"
      maxLength={40}
      label="Name"
      />
      <Input 
      name="link"
      label="TwitterLink"
      />
      <Input 
      name="image"
      label="Image"
      />
      <Input
      tag="textarea"
      name="description"
      label="Description"
      />
      <Button>Add new item</Button>
    </form>
  </div>
);

export default Form;

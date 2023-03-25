import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import Title from "../../Title/Title";


const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      <ImageTag src={image} className={image ? styles.image : styles.imageNone} alt={name} />
      <div>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink} > VISIT MY PAGE</Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
  image: "https://i.insider.com/63599198ea35650019e056c3?width=700",
};

export default ListItem;

import React from "react";


import './ListItem.css';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
    <li className="listItem__wrapper">
        <img alt="DAN" src={image} className="listItem__image" />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a className="listItem__button" href={twitterLink}>Visit page</a>
        </div>
    </li>
)

export default ListItem;
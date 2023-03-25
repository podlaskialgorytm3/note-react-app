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
            <h2 className="listItem__name">{name || "The simple name of famous person"}</h2>
            <p className="listItem__description">{description || "The simple text about description"}</p>
            <a targer="_blank" rel="noreferrer" className="listItem__button" href={twitterLink || "Twitterlink to his/her profile"}>Visit page</a>
        </div>
    </li>
)

export default ListItem;
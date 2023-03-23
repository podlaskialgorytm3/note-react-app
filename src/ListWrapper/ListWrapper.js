import React from "react";

import ListItem from "./ListItem/ListItem"
import { twitterAccounts } from "../data/twitterAccounts";


import './ListWrapper.css'


const ListWrapper = () => (
    <ul>
        {twitterAccounts.map((account) => (
            <ListItem
                image={account.image}
                name={account.name}
                description={account.description}
                twitterLink={account.twitterLink}
            />
        ))}
    </ul>
)

export default ListWrapper;